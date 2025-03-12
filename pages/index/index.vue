<template>
	<view class="content">
		<view class="energy-container">
			<view class="energy-header">
				<text class="energy-header_title">打工人能效标识</text>
				<text class="energy-header_desc">WORKERS ENERGY LABEL</text>
			</view>
			<view class="energy-label">
				<view class="energy-label__scale">
					<energy-scale @change="scaleChange"></energy-scale>
					<view class="energy-custom">
						<avatar :scaleInfo="scaleInfo"></avatar>
					</view>
				</view>
				<view class="worker-info">
					<view>打工人名称：</view>
					<input class="worker-info_input" type="text" value="毛小毛" />
				</view>
				<view class="worker-info">
					<view>打工人职位：</view>
					<input class="worker-info_input" type="text" value="WEB前端全干工程师" />
				</view>
			</view>
			<view class="energy-detail">
				<view class="energy-detail_field" v-for="item in defaultText" :key="item.key">
					<input class="field-left" type="text" :value="item.title" />
					<input class="field-right" type="text" :value="item.desc" />
				</view>
			</view>
			<input class="energy-footer" type="text" value="工作生活平衡，享受完美人生" />
		</view>
		<view class="operate">
			<view class="tips">!!!点击文字进行编辑</view>
			<view class="download">下载</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue';
	import { ScaleItem } from '../../components/energy-scale/energy-scale.vue';

	const defaultText = reactive([
		{ key: 0, title: '每周额定工作量(H)', desc: "40"},
		{ key: 1, title: '每日额定工作量(H)', desc: "8" },
		{ key: 2, title: '每周最大工作量(H)', desc: "44" },
	])
	
	const scaleInfo = ref(null);
	
	const scaleChange = (scale: ScaleItem) => {
		scaleInfo.value = scale;
	}
</script>

<style lang="scss">
	page {
		font-family: SimHei;
	}
	.content {
		min-height: 100vh;
		background-color: #f8f8f8;
		overflow: hidden;
		
		.tips {
			text-align: center;
			font-size: 24rpx;
		}
		
		.energy-container {
			width: 700rpx;
			height: auto;
			border-radius: 20rpx;
			margin: 25rpx auto;
			background-color: #00a0e9;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			.energy-header {
				color: #fff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				
				&_title {
					font-size: 60rpx;
					text-align: center;
					margin-top: 50rpx;
					font-weight: bolder;
				}
				
				&_desc {
					font-size: 20rpx;
					text-align: center;
					font-weight: bolder;
					word-spacing: 40rpx;
					letter-spacing: 4rpx;
					margin-top: 10rpx;
				}
			}
			
			.energy-label, .energy-detail {
				width: 660rpx;
				border-radius: 20rpx;
				box-sizing: border-box;
				padding: 30rpx;
				background-color: #fff;
			}
			
			.energy-label {
				display: flex;
				flex-direction: column;
				gap: 25rpx;
				margin-top: 50rpx;
				
				&__scale {
					display: flex;
					justify-content: space-between;
					padding: 0 20rpx;
					margin-bottom: 20rpx;
				}
				
				.energy-custom {
					width: 250rpx;
					height: 250rpx;
					margin-top: 20rpx;
					border-radius: 4rpx;
					overflow: hidden;
				}
				
				.worker-info {
					display: flex;
					justify-content: space-between;
					font-size: 28rpx;
					font-family: SimHei;
					
					&_input {
						text-align: right;
						font-weight: bold;
						font-size: 28rpx;
					}
				}
			}
			
			.energy-detail {
				color: #000;
				font-weight: bold;
				display: flex;
				flex-direction: column;
				gap: 20rpx;
				margin-top: 25rpx;
				
				&_field {
					width: 100%;
					display: flex;
					justify-content: space-between;
					
					.field-left {
						text-align: left;
						width: 70%;
					}
					
					.field-right {
						text-align: right;
						width: 30%;
					}
				}
				
				&_field:nth-child(1) {
					padding-bottom: 25rpx;
					border-bottom: 1rpx solid #333;
				}
			}
			
			.energy-footer {
				text-align: center;
				padding: 10px;
				font-size: 12px;
				color: #fff;
				width: 100%;
			}
		}
		
		.operate {
			width: 100%;
			padding: 0 30rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: start;
			
			.tips {
				font-size: 24rpx;
				color: #333;
			}
			
			.download {
				width: 140rpx;
				height: 60rpx;
				border-radius: 10rpx;
				background-color: #00a0e9;
				color: #fff;
				font-size: 28rpx;
				line-height: 60rpx;
				text-align: center;
			}
		}
	}

</style>
