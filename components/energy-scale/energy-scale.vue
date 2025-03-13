<template>
	<view class="energy-scale_container">
		<view class="energy-scale">
			<view class="energy-scale_top">耗能低</view>
			<view class="energy-scale_body">
				<view class="energy-scale_content">
					<view :class="'energy-scale_item energy-scale_' + item.level" :style="{backgroundColor: item.color}"
						v-for="item in scaleList" :key="item.key" @click="scaleClick(item)">{{ item.level }}</view>
				</view>
				<view class="energy-scale_selected"
					:style="{backgroundColor: scaleSelected.color, top: (30 + (scaleSelected.key - 1) * 60 - 30) + 'rpx'}">
					<text class="level-text">{{scaleSelected.level}}</text>
					<text>级</text>
				</view>
			</view>
			<view class="energy-scale_bottom">耗能高</view>
		</view>
		<avatar :scaleInfo="scaleSelected"></avatar>
	</view>
</template>

<script setup lang="ts">
	import { reactive, ref, unref } from 'vue';

	export interface ScaleItem {
		key : number;
		level : string;
		color : string;
	}

	const scaleList = reactive<ScaleItem[]>([
		{ key: 1, level: '1', color: '#2d7d3c' },
		{ key: 2, level: '2', color: '#7ab042' },
		{ key: 3, level: '3', color: '#ffd100' },
		{ key: 4, level: '4', color: '#f7941d' },
		{ key: 5, level: '5', color: '#ed1c24' },
	])

	const scaleSelected = ref<ScaleItem>(scaleList[0]);
	
	const emit = defineEmits<{
	  (e: 'change', scale: ScaleItem): void
	}>()
	

	const scaleClick = (scale: ScaleItem) => {
		scaleSelected.value = scale;
	}
	
</script>

<style lang="scss">
	.energy-scale_container {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
	}
	
	.energy-scale {
		width: 120rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10rpx;

		&_body {
			position: relative;
		}

		&_content {
			width: 120rpx;
			-webkit-clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%);
			clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%);

			.energy-scale_item {
				width: 100%;
				height: 60rpx;
				color: #fff;
				font-size: 28rpx;
				font-weight: bold;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		&_selected {
			width: 90rpx;
			height: 60rpx;
			box-sizing: border-box;
			padding: 10rpx;
			padding-left: 30rpx;
			-webkit-clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);
			clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 50%);
			color: #fff;
			position: absolute;
			right: -110rpx;
			text-align: center;
			font-size: 16rpx;
			transition: 0.2s linear;

			.level-text {
				font-size: 50rpx;
				font-weight: bolder;
				line-height: 40rpx;
			}
		}

		&_top,
		&_bottom {
			font-weight: bold;
			color: #000;
			font-size: 24rpx;
		}
	}
</style>