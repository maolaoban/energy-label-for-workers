<template>
	<view class="avatar" @click="chooseImage" :style="{ backgroundColor: scaleInfo.color }">
		<view :class="'face ' + expression[scaleInfo.key - 1]" v-if="!customImage">
			<div class="eye"></div>
			<div class="eye"></div>
			<div class="mouth"></div>
		</view>
		<image v-else class="avatar-image" :src="customImage" mode="aspectFill"></image>
	</view>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import { ScaleItem } from '../energy-scale/energy-scale.vue';

type Props = {
	scaleInfo: ScaleItem
}

const props = withDefaults(defineProps<Props>(), {
	scaleInfo: null
})

const { scaleInfo } = toRefs(props);

const expression = ['excited', 'happy', 'calm', 'sad', 'pain'];

const customImage = ref('');

watch([scaleInfo], () => {
	customImage.value = '';
})

const chooseImage = () => {
	uni.chooseImage({
		count: 1,
		success(res) {
			customImage.value = res.tempFilePaths[0];
		}
	})
}
</script>

<style lang="scss">
.avatar {
	width: 300rpx;
	height: 300rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	
	&-image {
		width: 100%;
		height: 100%;
	}
	
	// 动画
	@keyframes excited {
	  from { height: 60rpx; }
	  to { height: 70rpx; }
	}
	
	@keyframes tear {
	  from { transform: translateY(0); opacity: 1; }
	  to { transform: translateY(30px); opacity: 0; }
	}
	
	@keyframes pain {
	  from { transform: translateX(-50%) rotate(155deg); }
	  to { transform: translateX(-50%) rotate(145deg); }
	}
	
	@keyframes blink {
	  0%, 95%, 100% { height: 24rpx; }
	  96%, 97%, 98%, 99% { height: 2rpx; }
	}
	
	@keyframes painBlink {
	  0%, 85%, 100% { height: 36rpx; }
	  86%, 87%, 88%, 89%, 90% { height: 6rpx; }
	}
	
	.face {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		background: #FFDD67;
		position: relative;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
		
		.eye {
		  width: 24rpx;
		  height: 24rpx;
		  background: #3A3A3A;
		  border-radius: 50%;
		  position: absolute;
		  top: 60rpx;
		  animation: blink 5s infinite;
		}
		
		.eye:nth-child(1) {
			left: 50rpx;
		}
		
		.eye:nth-child(2) {
			right: 50rpx;
		}
		
		.mouth {
			position: absolute;
		}
	}
	// 兴奋
	.excited .mouth{
		width: 120rpx;
		height: 60rpx;
		background: #E84C3D;
		border-radius: 0 0 60rpx 60rpx;
		bottom: 15px;
		left: 50%;
		transform: translateX(-50%);
		animation: excited 0.8s infinite alternate;
		
		@mixin tooth {
			content: '';
			background-color: #fff;
			width: 20rpx;
			height: 14rpx;
			position: absolute;
			border-radius: 0 0 8rpx 8rpx;
		}
		
		&::before {
			@include tooth();
			left: calc(50% - 20rpx);
		}
		
		&::after {
			@include tooth();
			left: 50%;
		}
	}
	
	// 开心
	.happy .mouth{
		width: 100rpx;
		height: 50rpx;
		border: 6rpx solid #3A3A3A;
		bottom: 40rpx;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 0 0 100rpx 100rpx;
		border-top: none;
	}
	
	// 平静
	.calm .eye {
		animation-duration: 6s; /* 较慢的眨眼频率 */
	}
	.calm .mouth {
	  width: 80rpx;
	  height: 6rpx;
	  background: #3A3A3A;
	  bottom: 60rpx;
	  border-radius: 3rpx;
	  left: 50%;
	  transform: translateX(-50%);
	}
	
	.sad {
		.eye::after {
		  content: '';
		  position: absolute;
		  width: 8rpx;
		  height: 8rpx;
		  background: #fff;
		  border-radius: 50%;
		  top: 4rpx;
		  left: 4rpx;
		}
		
		.mouth {
			width: 100rpx;
			height: 50rpx;
			border: 6rpx solid #3A3A3A;
			bottom: 40rpx;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 100rpx 100rpx 0 0;
			border-bottom: none;
		}
		
		&::after {
		  content: '💧';
		  position: absolute;
		  font-size: 14px;
		  top: 80rpx;
		  left: 40rpx;
		  animation: tear 1.5s infinite linear;
		}
	}
	
	.pain {
		.eye {
		  width: 20rpx;
		  height: 36rpx;
		  border-radius: 10rpx;
		  background: #3A3A3A;
		  animation: painBlink 4s infinite; /* 更急促的眨眼 */
		}
		
		.eye:nth-child(1)::after {
			content: '';
			  width: 40rpx;
			  height: 8rpx;
			  transform-origin: right center;
			  top: 2rpx;
			  left: -10rpx;
			  position: absolute;
			  transform: rotate(20deg);
			  background-color: #3A3A3A;
		}
		
		.eye:nth-child(2)::after {
			content: '';
			  width: 40rpx;
			  height: 8rpx;
			  transform-origin: left center;
			  top: 2rpx;
			  right: -10rpx;
			  position: absolute;
			  transform: rotate(-20deg);
			  background-color: #3A3A3A;
		}
		
		.mouth {
		  width: 80rpx;
		  height: 80rpx;
		  border: 6rpx solid transparent;
		  border-bottom-color: #3A3A3A;
		  border-radius: 50%;
		  bottom: -20rpx;
		  left: 60%;
		  transform: translateX(-50%) rotate(135deg);
		  animation: pain 0.6s infinite alternate;
		}
	}
}
</style>