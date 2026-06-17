<template>
	<view class="guide-mask" v-if="visible">
		<view class="guide-popup" @click.stop>
			<view class="guide-steps">
				<view class="guide-step" v-for="(step, index) in steps" :key="index">
					<view class="step-number">{{ index + 1 }}</view>
					<view class="step-content">
						<view class="step-text">{{ step.text }}</view>
						<view class="step-desc">{{ step.desc }}</view>
					</view>
				</view>
			</view>
			<view class="guide-footer">
				<view class="guide-btn" @click="close">开始制作</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const GUIDE_KEY = 'energy-label-guide-seen';
const visible = ref(false);

const steps = [
	{ text: '切换等级', desc: '选择你的工作能效等级' },
	{ text: '上传头像', desc: '点击头像区域上传' },
	{ text: '编辑文字', desc: '自定义能效标识信息' },
	{ text: '下载图片', desc: '保存你的专属标识' }
];

onMounted(() => {
	const seen = uni.getStorageSync(GUIDE_KEY);
	if (!seen) {
		visible.value = true;
	}
});

const close = () => {
	visible.value = false;
	uni.setStorageSync(GUIDE_KEY, true);
	currentStep.value = 0;
};
</script>

<style lang="scss" scoped>
.guide-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	animation: fadeIn 0.3s ease;
}

.guide-popup {
	width: 520rpx;
	background: #fff;
	border-radius: 24rpx;
	padding: 40rpx;
	animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.guide-steps {
	display: flex;
	flex-direction: column;
	gap: 30rpx;
}

.guide-step {
	display: flex;
	align-items: center;
	padding: 20rpx;
	border-radius: 16rpx;
	background: #f5f5f5;
	transition: all 0.3s ease;
	position: relative;
}

.step-number {
	width: 48rpx;
	height: 48rpx;
	border-radius: 50%;
	background: #00a0e9;
	color: #fff;
	font-size: 24rpx;
	font-weight: bold;
	margin-right: 20rpx;
	text-align: center;
	line-height: 48rpx;
}

.step-content {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 6rpx;
}

.step-icon {
	font-size: 40rpx;
	margin-bottom: 4rpx;
}

.step-text {
	font-size: 30rpx;
	font-weight: bold;
}

.step-desc {
	font-size: 24rpx;
	opacity: 0.8;
}

.guide-footer {
	margin-top: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.guide-progress {
	display: flex;
	gap: 12rpx;
}

.progress-dot {
	width: 16rpx;
	height: 16rpx;
	border-radius: 50%;
	background: #ddd;
	transition: all 0.3s ease;

	&.active {
		background: #00a0e9;
		width: 40rpx;
		border-radius: 8rpx;
	}
}

.guide-btn {
	padding: 16rpx 40rpx;
	background: linear-gradient(135deg, #00a0e9 0%, #0086d3 100%);
	color: #fff;
	border-radius: 40rpx;
	font-size: 28rpx;
	font-weight: bold;
	transition: transform 0.2s ease;

	&:active {
		transform: scale(0.95);
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes slideIn {
	from {
		opacity: 0;
		transform: translateY(60rpx) scale(0.9);
	}
	to {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
}
</style>
