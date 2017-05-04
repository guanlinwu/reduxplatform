/**
 * 个人中心数据
 * @type {Object}
 */
const user = {
    userMenus : {
    	collect : {
    		content : '收藏',
    		route   : 'none',
    		iconClass : 'icon-collection',
    	},
		follow : {
    		content : '关注',
    		route   : 'none',
    		iconClass : 'icon-follow',
    	},
    	setting : {
    		content : '设置',
    		route   : 'none',
    		iconClass : 'icon-install',
    	}
    },
    login: {
        isLogin: false
    }
};

export default user;