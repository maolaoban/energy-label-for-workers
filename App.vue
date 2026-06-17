<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
		font-family: 'ZhengDao';
		src: url('./static/ZhengDao.ttf');
	}
	@font-face {
		font-family: 'LocalSimHei';
		src: url('./static/SourceHanSansSC-Normal-Min.ttf');
	}
	page {
		font-family: 'LocalSimHei';
		background: linear-gradient(135deg, #f0f4f8 0%, #e8f0f7 50%, #f5f7fa 100%);
	}
</style>
