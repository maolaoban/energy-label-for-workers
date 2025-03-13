<template>
	<view class="content">
		<div class="energy-container" ref="targetElement">
			<view class="energy-header">
				<text class="energy-header_title">打工能效标识</text>
				<text class="energy-header_desc">WORK ENERGY LABEL</text>
			</view>
			<view class="energy-label">
				<view class="energy-label_scale">
					<energy-scale></energy-scale>
				</view>
				<view class="worker-info">
					<view>打工人名称：</view>
					<input class="worker-info_input" type="text" value="打工人" />
				</view>
				<view class="worker-info">
					<view>规格型号：</view>
					<input class="worker-info_input" type="text" :value="model" />
				</view>
			</view>
			<view class="energy-detail">
				<view class="energy-detail_field" v-for="item in defaultText" :key="item.key">
					<input class="field-left" type="text" :value="item.title" />
					<input class="field-right" type="text" :value="item.desc" />
				</view>
			</view>
			<input class="energy-footer" type="text" value="拒绝精神内耗，有事直接发疯" />
		</div>
		<view class="operate">
			<view class="tips" v-text="'!!!点击进行编辑,建议在chrome浏览器中使用'"></view>
			<!-- #ifdef H5 -->
			<view :class="['download', downloading ? 'disabled' : '']" @click="download">{{ downloading ? '下载中...' : '下载'}}</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script setup lang="ts">
	import { getCurrentInstance, reactive, ref } from 'vue';
	import { ScaleItem } from '../../components/energy-scale/energy-scale.vue';
	// import html2canvas from 'html2canvas';
	import domtoimage from 'dom-to-image';

	const instance = getCurrentInstance();

	const query = uni.createSelectorQuery().in(instance.proxy);
	
	const model = ref('DRG-' + Date.now());

	const targetElement = ref(null);
	
	const dpr = window.devicePixelRatio || 1;

	const defaultText = reactive([
		{ key: 0, title: '每周最大工作量(H)', desc: "44" },
		{ key: 1, title: '每日额定工作量(H)', desc: "8" },
		{ key: 2, title: '每周额定工作量(H)', desc: "40" },
	])
	
	const downloading = ref(false);

	const download = async () => {
		if(downloading.value) return
		downloading.value = true;
		// try {
		// 	// 1. 渲染DOM到Canvas
		// 	const canvas = await html2canvas(targetElement.value, {
		// 		backgroundColor: 'transparent', // 设置背景色
		// 		useCORS: true, // 允许跨域图片
		// 	});

		// 	// 2. 将Canvas转为图片URL
		// 	const imgData = canvas.toDataURL('image/png');
		// 	console.log(imgData)

		// 	// 3. 创建虚拟链接并触发下载
		// 	const link = document.createElement('a');
		// 	link.download = 'screenshot.png';
		// 	link.href = imgData;
		// 	link.click();

		// 	console.log('图片已保存');
		// } catch (error) {
		// 	console.error('截图失败:', error);
		// }
		domtoimage.toPng(targetElement.value, {
			quality: 1,       // 质量设为最高（0~1）
			width: targetElement.value.offsetWidth * dpr,   // 按 DPR 放大宽度
			height: targetElement.value.offsetHeight * dpr, // 按 DPR 放大高度
			style: {
				transform: `scale(${dpr})`,       // 缩放元素
			    transformOrigin: 'top left',
			    width: `${targetElement.value.offsetWidth}px`,
			    height: `${targetElement.value.offsetHeight}px`
			}
		}).then((dataUrl) => {
		    const link = document.createElement('a');
		    link.download = 'energy-label-for-workers.png';
		    link.href = dataUrl;
		    link.click();
		}).finally(() => {
			downloading.value = false;
		});
	}
</script>

<style lang="scss">
	.content {
		min-height: 100vh;
		background-color: #f8f8f8;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20rpx;
		padding-top: 25rpx;

		.energy-container {
			width: 700rpx;
			height: auto;
			border-radius: 20rpx;
			background-color: #00a0e9;
			display: flex;
			flex-direction: column;
			align-items: center;

			.energy-header {
				color: #fff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				font-family: 'ZhengDao';

				&_title {
					font-size: 80rpx;
					text-align: center;
					margin-top: 50rpx;
					letter-spacing: 10rpx;
					line-height: 80rpx;
				}

				&_desc {
					font-size: 30rpx;
					text-align: center;
					word-spacing: 20rpx;
					letter-spacing: 10rpx;
					font-weight: bold;
					line-height: 30rpx;
				}
			}

			.energy-label,
			.energy-detail {
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
				display: flex;
				flex-direction: column;
				gap: 20rpx;
				margin-top: 25rpx;

				&_field {
					width: 100%;
					display: flex;
					justify-content: space-between;
					font-weight: bold;

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
				margin: 10px;
				font-size: 12px;
				color: #fff;
				width: 100%;
			}
		}

		.operate {
			width: 750rpx;
			padding: 0 30rpx;
			margin: 0 auto;
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
				font-size: 24rpx;
				line-height: 60rpx;
				text-align: center;
			}
			
			.disabled {
				background-color: #ccc;
			}
		}
	}
</style>