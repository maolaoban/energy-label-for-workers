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
	}
</style>
