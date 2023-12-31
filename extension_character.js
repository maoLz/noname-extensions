'use strict';
game.import('太虚幻境',function (lib, game, ui, get, ai, _status) {
	game.NPCPack = { 
		character:{
			/*初涉幻境*/
			'txhj_huanjingshouhutongzi':["female","qun",2,[],["forbidai"]],
			'txhj_elang':["male","qun",4,['xinkuanggu'],["forbidai"]],
			'txhj_huanjingweishi':["male","qun",4,['yingjian','qiaomeng','lieren'],["forbidai"]],
			'txhj_tonghu':["male","qun",4,['wushuang','mengjin'],["forbidai"]],
			'txhj_huanxiangbingnv':["female","qun",2,['mashu'],["forbidai"]],
			'txhj_huanxiangbingnan':["male","qun",2,['mashu'],["forbidai"]],
			'txhj_shouhudizi':["male","qun",3,['zhidao'],["forbidai"]],
			'txhj_lingjitongren':["female","qun",'4/6',['txhj_daiyuan'],["forbidai"]],
			'txhj_fuguangtongren':["female","qun",'4/5',['txhj_daiyuan'],["forbidai"]],
			'txhj_shenjunbaima':["female","qun",3,['qiaomeng','yicong'],["forbidai"]],
			'txhj_guojiahuanxiang':["male","wei",4,['tiandu','new_reyiji'],["forbidai"]],
			'txhj_zhicaihuanxiang':["male","wei",4,['tiandu','xianfu','chouce'],["forbidai"]],
			'txhj_wolonghuanxiang':["male","shu",4,['qice','bazhen','zhenlue'],["forbidai"]],
			'txhj_fengchuhuanxiang':["male","shu",4,['rejieming','rekanpo','zhenlue'],["forbidai"]],
			'txhj_zhouyuhuanxiang':["male","wu",4,['refanjian','qingzhongx'],["forbidai"]],
			'txhj_luxunhuanxiang':["male","wu",4,['relianying','weijing'],["forbidai"]],
			'txhj_jiaxuhuanxiang':["male","qun",4,['luanwu','wansha','weimu'],["forbidai"]],
			'txhj_dianweihuanxiang':["male","wei",4,['reqiangxi','xinkuanggu',],["forbidai"]],
			'txhj_xuchuhuanxiang':["male","wei",4,['reluoyi'],["forbidai"]],
			'txhj_guanyuhuanxiang':["male","shu",4,['new_rewusheng','new_yijue'],["forbidai"]],
			'txhj_zhangfeihuanxiang':["male","shu",4,['new_repaoxiao','txhj_zuijiu'],["forbidai"]],
			'txhj_ganninghuanxiang':["male","wu",4,['qixi','fenwei',],["forbidai"]],
			'txhj_lingtonghuanxiang':["male","wu",4,['rexianzhen','fenwei'],["forbidai"]],
			'txhj_lvbuhuanxiang':["male","qun",4,['wushuang','repojun','txhj_baoji'],["forbidai"]],
			'txhj_caorenhuanxiang':["male","wei",5,['xinjushou','xinjiewei','lizhan'],["forbidai"]],
			'txhj_zhaoyunhuanxiang':["male","shu",5,['longdan','chongzhen','mashu'],["forbidai"]],
			'txhj_zhoutaihuanxiang':["male","wu",4,['buqu','yinghun'],["forbidai"]],
			'txhj_shangjianghuanxiang':["male","qun",7,['mengjin','yaowu','kuangfu'],["forbidai"]],
			'txhj_hunduntongren':["male","qun",4,['rexingluan','txhj_juhun'],["forbidai"]],
			'txhj_moou':["male","qun",10,['rexingluan','txhj_guimei','txhj_baoji'],["forbidai"]],
			'txhj_mowangzhizhong':["male","qun",6,['xinfu_langxi','jintao'],["forbidai"]],
			'txhj_chi':["male","qun",2,['kuangfu','txhj_baoji'],["forbidai"]],
			'txhj_mei':["male","qun",2,['kuangfu','txhj_baoji'],["forbidai"]],
			'txhj_wang':["male","qun",2,['kuangfu','txhj_baoji'],["forbidai"]],
			'txhj_liang':["male","qun",2,['kuangfu','txhj_baoji'],["forbidai"]],
			'txhj_huanshenguanyu':["male","shen",5,['retieji','repojun','jiaozi','wushen'],["forbidai"]],
			'txhj_huanshenlvmeng':["male","shen",4,['benyu','keji','shelie','gongxin'],["forbidai"]],
			'txhj_huanshenzhouyu':["male","shen",4,['reyingzi','refanjian','qinyin','yeyan'],["forbidai"]],
			'txhj_huanshenzhuge':["male","shen",4,['reguanxing','kongcheng','qice','qingxian'],["forbidai"]],
			'txhj_huanshencaocao':["male","shen",5,['rejianxiong','yuce','fuli','zhichi'],["forbidai"]],
			'txhj_huanshenlvbu':["male","shen",5,['xinliegong','jigong','baonu','shenfen'],["forbidai"]],
			'txhj_huanshenzhaoyun':["male","shen",4,['kunfen','reyajiao','juejing','longhun'],["forbidai"]],
			'txhj_huanshensima':["male","shen",4,['refankui','reguicai','rejizhi','rezhiheng'],["forbidai"]],
			'txhj_yongwuhuanxiang':["male","qun",6,['zhuiji','wushuang','jiuchi','nzry_shicai'],["forbidai"]],
			'txhj_jianshouhuanxiang':["male","qun",8,['zhuiji','hanyong','shibei','bazhen'],["forbidai"]],
			'txhj_huoxinhuanxiang':["male","qun",5,['retuxi','juece','mieji','wangzun'],["forbidai"]],
			'txhj_manyanhuanxiang':["male","qun",5,['jianying','duwu','qiangzhi'],["forbidai"]],
			'txhj_yinhuanxiang':["male","qun",4,['rebiyue','mingce','jujian'],["forbidai"]],
			'txhj_yanghuanxiang':["male","qun",5,['xinkuanggu','jianchu'],["forbidai"]],
			'txhj_heiwuchanghuanxiang':["male","qun",6,['duwu','txhj_baolian'],["forbidai"]],
			'txhj_baiwuchanghuanxiang':["male","qun",6,['yingjian','txhj_zuijiu'],["forbidai"]],
			'txhj_niutouhuanxiang':["male","qun",6,['xiangle','refankui','txhj_beiming'],["forbidai"]],
			'txhj_mamianhuanxiang':["male","qun",6,['juece','retuxi','txhj_beiming'],["forbidai"]],
			'txhj_qianchaotongren':["male","qun",6,['bazhen','shixin','xinfu_langxi'],["forbidai"]],
			'txhj_hanlingdi':["male","qun",'4/6',['zaiqi','chouhai','yongsi','txhj_daiyuan'],["forbidai"]],
			'txhj_baxiaoweishouling':["male","qun",4,['quji','yinbing'],["forbidai"]],
			'txhj_shiemoxing':["male","qun",99,['txhj_guimei','txhj_luolei','txhj_guihuo'],["forbidai"]],
			'txhj_wujiaoxinmo':["male","qun",8,['rejieming','olniepan','drlt_xiongluan','rehuashen','xinsheng'],["forbidai"]],
			'txhj_huanjinglingzhu':["male","qun",12,['retieji','xinkuanggu','olniepan','qiangzhi','txhj_zuijiu'],["forbidai"]],
			'txhj_tongrenjumo':["male","qun",10,['yizhong','yongsi','txhj_juhun'],["forbidai"]],
			'txhj_tiaopibubu':["male","shen",25,['new_repaoxiao','fulin','ranshang','xiangle','txhj_baoji'],["forbidai"]],
			'txhj_tianjijushou':["male","qun",8,['new_reqingnang','txhj_kuangbao','txhj_tunshi','txhj_chuanyun'],["forbidai"]],

			/*黄天之怒*/
			'txhj_huangjinxinjun':["male","qun",3,['txhj_huangjin','txhj_zhouzu'],["forbidai"]],/*新技能*/
			'txhj_guanhai':["male","qun",4,['txhj_huangjin','qixi','txhj_zhouzu'],["forbidai"]],/*新技能*/
			'txhj_peiyuanshao':["male","qun",4,['txhj_huangjin','txhj_zuijiu','xinfu_xingluan'],["forbidai"]],/*新技能*/
			'txhj_huangjinmengqi':["male","qun",4,['txhj_huangjin'],["forbidai"]],/*新技能*/
			'txhj_dengmao':["male","qun",6,['txhj_huangjin','shensu','zhidao','xinfu_xingluan'],["forbidai"]],/*新技能*/
			'txhj_dongzhuo':["male","qun",'6/8',['dujin','benghuai','jiaozi','txhj_daiyuan'],["forbidai"]],/*新技能*/
			'txhj_bocai':["male","qun",6,['txhj_huangjin','dujin','duwu'],["forbidai"]],/*新技能*/
			'txhj_huangjinyaoshi':["male","qun",4,['txhj_huangjin','txhj_guimen','txhj_yaoshu'],["forbidai"]],/*新技能*/
			'txhj_huangjinyushi':["male","qun",6,['txhj_huangjin','txhj_guimen','txhj_zhoufa'],["forbidai"]],/*新技能*/
			'txhj_huangfusong':["male","qun",6,['dujin','yeyan','lianpo'],["forbidai"]],
			'txhj_zhujun':["male","qun",6,['yizhong','zhanyi','repojun'],["forbidai"]],
			'txhj_changyuanshibing':["male","qun",6,['txhj_shiyuan'],["forbidai"]],/*新技能*/
			'txhj_huanyanzhangliang':["male","qun",'7/16',['nzry_chenglve','txhj_renwang','txhj_renfang'],["forbidai"]],/*新技能*/
			'txhj_huanyanzhangbao':["male","qun",'10/12',['leiji','qiangxi','txhj_dizhou','txhj_didun'],["forbidai"]],/*新技能*/
			'txhj_huanyanzhangjiaoshi':["male","qun",'8/12',['leiji','txhj_huangjin','txhj_wangyuan','txhj_shiyuan','txhj_zhuhun'],["forbidai"]],/*新技能*/
			'txhj_huanyanzhangjiaolei':["male","qun",'10/12',['leiji','qiangxi','txhj_zhoulei'],["forbidai"]],/*新技能*/
			'txhj_huanyanzhangjiaohuo':["male","qun",'12/15',['leiji','txhj_huangjin','lihuo','txhj_guiyan','huoji'],["forbidai"]],/*新技能*/
			'txhj_huanyanzhangjiaofeng':["male","qun",'12/15',['leiji','txhj_huangjin','qiangxi','txhj_xiefeng'],["forbidai"]],/*新技能*/

			/*何进诛宦*/
			'txhj_huanguan':["male","qun",3,['txhj_xiehui'],["forbidai"]],/*新技能*/
			'txhj_huanguandaofushou':["male","qun",4,['txhj_huangmen','txhj_xiehui','kuangfu'],["forbidai"]],/*新技能*/
			'txhj_hetaihou':["female","qun",3,['xinfu_lingren','fenyin','zhendu','txhj_suoming'],["forbidai"]],/*新技能*/
			'txhj_dongtaihou':["female","qun",3,['xinchenhui','qiangxi','xinfu_songsang','fenji'],["forbidai"]],
			'txhj_baohong':["male","qun",8,['txhj_linglu','txhj_xiehui'],["forbidai"]],/*新技能*/
			'txhj_xiaoweijun':["male","qun",4,['txhj_yishi','kaikang'],["forbidai"]],/*新技能*/
			'txhj_chunyuqiong':["male","qun",12,['txhj_jinwei','txhj_jinxing','jiuchi'],["forbidai"]],/*新技能*/
			'txhj_jinweijun':["male","qun",6,['txhj_jinwei','txhj_yishi','longdan'],["forbidai"]],/*新技能*/
			'txhj_zhaorong':["male","qun",4,['txhj_zhulian','txhj_xiehui'],["forbidai"]],/*新技能*/
			'txhj_zhaozhong':["male","qun",'6/12',['txhj_huangmen','txhj_jinxing','txhj_xiehui','txhj_daiyuan','huaizi'],["forbidai"]],/*新技能*/
			'txhj_yuanshao':["male","qun",6,['zhanyi','zhiyi','weifeng','txhj_zhanhuo'],["forbidai"]],/*新技能*/
			'txhj_yuanshu':["male","qun",4,['duanliang','quhu','xinfu_daigong','xinfu_fuyin'],["forbidai"]],
			'txhj_caocao':["male","qun",6,['kaikang','redangxian','nzry_kuizhu','txhj_jiaoxie'],["forbidai"]],/*新技能*/
			'txhj_xuyou':["male","qun",3,['nzry_chenglve','nzry_shicai','nzry_cunmu'],["forbidai"]],
			'txhj_jianshuo':["male","qun",8,['txhj_jinwei','txhj_jinxing','txhj_zhuosheng','txhj_zhulian'],["forbidai"]],/*新技能*/
			'txhj_huanyanzhangrang':["male","qun",11,['txhj_huangmen','txhj_quanqin','taoluan','shefu'],["forbidai"]],/*新技能*/
			'txhj_huanyanhejin':["male","qun",10,['txhj_mouqiang','txhj_zhuosheng','txhj_linglu','mouzhu'],["forbidai"]],/*新技能*/
		},
		characterSort:{
			'mode_extension_太虚幻境':{
				txhj_HeJinZhuHuan:[
				    'txhj_huanguan',
				    'txhj_huanguandaofushou',
				    'txhj_hetaihou',
				    'txhj_dongtaihou',
				    'txhj_baohong',
				    'txhj_xiaoweijun',
				    'txhj_chunyuqiong',
				    'txhj_jinweijun',
				    'txhj_zhaorong',
				    'txhj_zhaozhong',
				    'txhj_yuanshao',
				    'txhj_yuanshu',
				    'txhj_caocao',
				    'txhj_xuyou',
				    'txhj_jianshuo',
				    'txhj_huanyanzhangrang',
				    'txhj_huanyanhejin',
				],
				txhj_HuangTianZhiNu:[
				    'txhj_huangjinxinjun',
				    'txhj_guanhai',
				    'txhj_peiyuanshao',
				    'txhj_huangjinmengqi',
				    'txhj_dengmao',
				    'txhj_dongzhuo',
				    'txhj_bocai',
				    'txhj_huangjinyaoshi',
				    'txhj_huangjinyushi',
				    'txhj_huangfusong',
				    'txhj_zhujun',
				    'txhj_changyuanshibing',
				    'txhj_huanyanzhangliang',
				    'txhj_huanyanzhangbao',
				    'txhj_huanyanzhangjiaoshi',
				    'txhj_huanyanzhangjiaolei',
				    'txhj_huanyanzhangjiaohuo',
				    'txhj_huanyanzhangjiaofeng',
				],
				txhj_ChongYingChuLin:[
				    'txhj_huanjingshouhutongzi',
				    'txhj_elang',
				    'txhj_huanjingweishi',
				    'txhj_tonghu',
				    'txhj_huanxiangbingnv',
				    'txhj_huanxiangbingnan',
				    'txhj_shouhudizi',
				    'txhj_lingjitongren',
				    'txhj_fuguangtongren',
				    'txhj_shenjunbaima',
				    'txhj_guojiahuanxiang',
				    'txhj_zhicaihuanxiang',
				    'txhj_wolonghuanxiang',
				    'txhj_fengchuhuanxiang',
				    'txhj_zhouyuhuanxiang',
				    'txhj_luxunhuanxiang',
				    'txhj_jiaxuhuanxiang',
				    'txhj_dianweihuanxiang',
				    'txhj_xuchuhuanxiang',
				    'txhj_guanyuhuanxiang',
				    'txhj_zhangfeihuanxiang',
				    'txhj_ganninghuanxiang',
				    'txhj_lingtonghuanxiang',
				    'txhj_lvbuhuanxiang',
				    'txhj_caorenhuanxiang',
				    'txhj_zhaoyunhuanxiang',
				    'txhj_zhoutaihuanxiang',
				    'txhj_shangjianghuanxiang',
				    'txhj_hunduntongren',
				    'txhj_moou',
				    'txhj_mowangzhizhong',
				    'txhj_chi',
				    'txhj_mei',
				    'txhj_wang',
				    'txhj_liang',
				    'txhj_huanshenguanyu',
				    'txhj_huanshenlvmeng',
				    'txhj_huanshenzhouyu',
				    'txhj_huanshenzhuge',
				    'txhj_huanshencaocao',
				    'txhj_huanshenlvbu',
				    'txhj_huanshenzhaoyun',
				    'txhj_huanshensima',
				    'txhj_yongwuhuanxiang',
				    'txhj_jianshouhuanxiang',
				    'txhj_huoxinhuanxiang',
				    'txhj_manyanhuanxiang',
				    'txhj_yinhuanxiang',
				    'txhj_yanghuanxiang',
				    'txhj_heiwuchanghuanxiang',
				    'txhj_baiwuchanghuanxiang',
				    'txhj_niutouhuanxiang',
				    'txhj_mamianhuanxiang',
				    'txhj_qianchaotongren',
				    'txhj_hanlingdi',
				    'txhj_baxiaoweishouling',
				    'txhj_shiemoxing',
				    'txhj_wujiaoxinmo',
				    'txhj_huanjinglingzhu',
				    'txhj_tongrenjumo',
				    'txhj_tiaopibubu',
				    'txhj_tianjijushou',
				],
			},
		},
		characterIntro:{
			/*何进诛宦*/
			'txhj_huanguan':'太虚幻境中的普通单位',
			'txhj_huanguandaofushou':'太虚幻境中的普通单位',
			'txhj_hetaihou':'太虚幻境中的普通单位',
			'txhj_dongtaihou':'太虚幻境中的普通单位',
			'txhj_baohong':'太虚幻境中的普通单位',
			'txhj_xiaoweijun':'太虚幻境中的普通单位',
			'txhj_chunyuqiong':'太虚幻境中的普通单位',
			'txhj_jinweijun':'太虚幻境中的普通单位',
			'txhj_zhaorong':'太虚幻境中的普通单位',
			'txhj_zhaozhong':'太虚幻境中的普通单位',
			'txhj_yuanshao':'太虚幻境中的普通单位',
			'txhj_yuanshu':'太虚幻境中的普通单位',
			'txhj_caocao':'太虚幻境中的普通单位',
			'txhj_xuyou':'太虚幻境中的普通单位',
			'txhj_jianshuo':'太虚幻境中的精英敌人',
			'txhj_huanyanzhangrang':'太虚幻境中的终极敌人',
			'txhj_huanyanhejin':'太虚幻境中的终极敌人',

			/*黄天之怒*/
			'txhj_huangjinxinjun':'太虚幻境中的普通单位',
			'txhj_guanhai':'太虚幻境中的普通单位',
			'txhj_peiyuanshao':'太虚幻境中的普通单位',
			'txhj_huangjinmengqi':'太虚幻境中的普通单位',
			'txhj_dengmao':'太虚幻境中的普通单位',
			'txhj_dongzhuo':'太虚幻境中的普通单位',
			'txhj_bocai':'太虚幻境中的普通单位',
			'txhj_huangjinyaoshi':'太虚幻境中的普通单位',
			'txhj_huangjinyushi':'太虚幻境中的普通单位',
			'txhj_huangfusong':'太虚幻境中的普通单位',
			'txhj_zhujun':'太虚幻境中的普通单位',
			'txhj_changyuanshibing':'太虚幻境中的普通单位',
			'txhj_huanyanzhangliang':'太虚幻境中的精英敌人',
			'txhj_huanyanzhangbao':'太虚幻境中的精英敌人',
			'txhj_huanyanzhangjiaoshi':'太虚幻境中的终极敌人',
			'txhj_huanyanzhangjiaolei':'太虚幻境中的终极敌人',
			'txhj_huanyanzhangjiaohuo':'太虚幻境中的终极敌人',
			'txhj_huanyanzhangjiaofeng':'太虚幻境中的终极敌人',

			/*冲应初临*/
			'txhj_huanjingshouhutongzi':'太虚幻境中的普通单位',
			'txhj_elang':'太虚幻境中的普通单位',
			'txhj_huanjingweishi':'太虚幻境中的普通单位',
			'txhj_tonghu':'太虚幻境中的普通单位',
			'txhj_huanxiangbingnv':'太虚幻境中的普通单位',
			'txhj_huanxiangbingnan':'太虚幻境中的普通单位',
			'txhj_shouhudizi':'太虚幻境中的普通单位',
			'txhj_lingjitongren':'太虚幻境中的普通单位',
			'txhj_fuguangtongren':'太虚幻境中的普通单位',
			'txhj_shenjunbaima':'太虚幻境中的普通单位',
			'txhj_guojiahuanxiang':'太虚幻境中的普通单位',
			'txhj_zhicaihuanxiang':'太虚幻境中的普通单位',
			'txhj_wolonghuanxiang':'太虚幻境中的普通单位',
			'txhj_fengchuhuanxiang':'太虚幻境中的普通单位',
			'txhj_zhouyuhuanxiang':'太虚幻境中的普通单位',
			'txhj_luxunhuanxiang':'太虚幻境中的普通单位',
			'txhj_jiaxuhuanxiang':'太虚幻境中的普通单位',
			'txhj_dianweihuanxiang':'太虚幻境中的普通单位',
			'txhj_xuchuhuanxiang':'太虚幻境中的普通单位',
			'txhj_guanyuhuanxiang':'太虚幻境中的普通单位',
			'txhj_zhangfeihuanxiang':'太虚幻境中的普通单位',
			'txhj_ganninghuanxiang':'太虚幻境中的普通单位',
			'txhj_lingtonghuanxiang':'太虚幻境中的普通单位',
			'txhj_lvbuhuanxiang':'太虚幻境中的普通单位',
			'txhj_caorenhuanxiang':'太虚幻境中的普通单位',
			'txhj_zhaoyunhuanxiang':'太虚幻境中的普通单位',
			'txhj_zhoutaihuanxiang':'太虚幻境中的普通单位',
			'txhj_shangjianghuanxiang':'太虚幻境中的普通单位',
			'txhj_hunduntongren':'太虚幻境中的普通单位',
			'txhj_moou':'太虚幻境中的普通单位',
			'txhj_mowangzhizhong':'太虚幻境中的普通单位',
			'txhj_chi':'太虚幻境中的普通单位',
			'txhj_mei':'太虚幻境中的普通单位',
			'txhj_wang':'太虚幻境中的普通单位',
			'txhj_liang':'太虚幻境中的普通单位',
			'txhj_huanshenguanyu':'太虚幻境中的精英敌人',
			'txhj_huanshenlvmeng':'太虚幻境中的精英敌人',
			'txhj_huanshenzhouyu':'太虚幻境中的精英敌人',
			'txhj_huanshenzhuge':'太虚幻境中的精英敌人',
			'txhj_huanshencaocao':'太虚幻境中的精英敌人',
			'txhj_huanshenlvbu':'太虚幻境中的精英敌人',
			'txhj_huanshenzhaoyun':'太虚幻境中的精英敌人',
			'txhj_huanshensima':'太虚幻境中的精英敌人',
			'txhj_yongwuhuanxiang':'太虚幻境中的普通单位',
			'txhj_jianshouhuanxiang':'太虚幻境中的普通单位',
			'txhj_huoxinhuanxiang':'太虚幻境中的普通单位',
			'txhj_manyanhuanxiang':'太虚幻境中的普通单位',
			'txhj_yinhuanxiang':'太虚幻境中的普通单位',
			'txhj_yanghuanxiang':'太虚幻境中的普通单位',
			'txhj_heiwuchanghuanxiang':'太虚幻境中的普通单位',
			'txhj_baiwuchanghuanxiang':'太虚幻境中的普通单位',
			'txhj_niutouhuanxiang':'太虚幻境中的普通单位',
			'txhj_mamianhuanxiang':'太虚幻境中的普通单位',
			'txhj_qianchaotongren':'太虚幻境中的普通单位',
			'txhj_hanlingdi':'太虚幻境中的普通单位',
			'txhj_baxiaoweishouling':'太虚幻境中的普通单位',
			'txhj_shiemoxing':'太虚幻境中的精英敌人',
			'txhj_wujiaoxinmo':'太虚幻境中的终极敌人',
			'txhj_huanjinglingzhu':'太虚幻境中的终极敌人',
			'txhj_tongrenjumo':'太虚幻境中的精英敌人',
			'txhj_tiaopibubu':'太虚幻境中的精英敌人',
			'txhj_tianjijushou':'太虚幻境中的普通单位',
		},
		skill:{},
		translate:{
			/*何进诛宦*/
			'txhj_HeJinZhuHuan':'何进诛宦',
			'txhj_huanguan':'宦官',
			'txhj_huanguandaofushou':'宦官刀斧手',
			'txhj_hetaihou':'何太后',
			'txhj_dongtaihou':'董太后',
			'txhj_baohong':'鲍鸿',
			'txhj_xiaoweijun':'校尉军',
			'txhj_chunyuqiong':'淳于琼',
			'txhj_jinweijun':'禁卫军',
			'txhj_zhaorong':'赵融',
			'txhj_zhaozhong':'赵忠',
			'txhj_yuanshao':'袁绍',
			'txhj_yuanshu':'袁术',
			'txhj_caocao':'曹操',
			'txhj_xuyou':'许攸',
			'txhj_jianshuo':'蹇硕',
			'txhj_huanyanzhangrang':'幻魇张让',
			'txhj_huanyanhejin':'幻魇何进',

			/*黄天之怒*/
			'txhj_HuangTianZhiNu':'黄天之怒',
			'txhj_huangjinxinjun':'黄巾新军',
			'txhj_guanhai':'管亥',
			'txhj_peiyuanshao':'裴元绍',
			'txhj_huangjinmengqi':'黄巾猛骑',
			'txhj_dengmao':'邓茂',
			'txhj_dongzhuo':'董卓',
			'txhj_bocai':'波才',
			'txhj_huangjinyaoshi':'黄巾妖师',
			'txhj_huangjinyushi':'黄巾雨师',
			'txhj_huangfusong':'皇甫嵩',
			'txhj_zhujun':'朱儁',
			'txhj_changyuanshibing':'长怨尸兵',
			'txhj_huanyanzhangliang':'幻魇张梁',
			'txhj_huanyanzhangbao':'幻魇张宝',
			'txhj_huanyanzhangjiaoshi':'幻魇张角尸',
			'txhj_huanyanzhangjiaolei':'幻魇张角雷',
			'txhj_huanyanzhangjiaohuo':'幻魇张角火',
			'txhj_huanyanzhangjiaofeng':'幻魇张角风',

			/*冲应初临*/
			'txhj_ChongYingChuLin':'冲应初临',
			'txhj_huanjingshouhutongzi':'守护童子',
			'txhj_elang':'饿狼',
			'txhj_huanjingweishi':'幻境卫士',
			'txhj_tonghu':'铜虎',
			'txhj_huanxiangbingnv':'幻象兵',
			'txhj_huanxiangbingnan':'幻象兵',
			'txhj_shouhudizi':'守护弟子',
			'txhj_lingjitongren':'灵机铜人',
			'txhj_fuguangtongren':'浮光铜人',
			'txhj_shenjunbaima':'神骏白马',
			'txhj_guojiahuanxiang':'郭嘉幻象',
			'txhj_zhicaihuanxiang':'志才幻象',
			'txhj_wolonghuanxiang':'卧龙幻象',
			'txhj_fengchuhuanxiang':'凤雏幻象',
			'txhj_zhouyuhuanxiang':'周瑜幻象',
			'txhj_luxunhuanxiang':'陆逊幻象',
			'txhj_jiaxuhuanxiang':'贾诩幻象',
			'txhj_dianweihuanxiang':'典韦幻象',
			'txhj_xuchuhuanxiang':'许褚幻象',
			'txhj_guanyuhuanxiang':'关羽幻象',
			'txhj_zhangfeihuanxiang':'张飞幻象',
			'txhj_ganninghuanxiang':'甘宁幻象',
			'txhj_lingtonghuanxiang':'凌统幻象',
			'txhj_lvbuhuanxiang':'吕布幻象',
			'txhj_caorenhuanxiang':'曹仁幻象',
			'txhj_zhaoyunhuanxiang':'赵云幻象',
			'txhj_zhoutaihuanxiang':'周泰幻象',
			'txhj_shangjianghuanxiang':'上将幻象',
			'txhj_hunduntongren':'混沌铜人',
			'txhj_moou':'魔偶',
			'txhj_mowangzhizhong':'魔王之踵',
			'txhj_chi':'魑',
			'txhj_mei':'魅',
			'txhj_wang':'魍',
			'txhj_liang':'魉',
			'txhj_huanshenguanyu':'幻神关羽',
			'txhj_huanshenlvmeng':'幻神吕蒙',
			'txhj_huanshenzhouyu':'幻神周瑜',
			'txhj_huanshenzhuge':'幻神诸葛',
			'txhj_huanshencaocao':'幻神曹操',
			'txhj_huanshenlvbu':'幻神吕布',
			'txhj_huanshenzhaoyun':'幻神赵云',
			'txhj_huanshensima':'幻神司马',
			'txhj_yongwuhuanxiang':'勇武幻象',
			'txhj_jianshouhuanxiang':'坚守幻象',
			'txhj_huoxinhuanxiang':'惑心幻象',
			'txhj_manyanhuanxiang':'蔓延幻象',
			'txhj_yinhuanxiang':'阴幻象',
			'txhj_yanghuanxiang':'阳幻象',
			'txhj_heiwuchanghuanxiang':'黑无常幻象',
			'txhj_baiwuchanghuanxiang':'白无常幻象',
			'txhj_niutouhuanxiang':'牛头幻象',
			'txhj_mamianhuanxiang':'马面幻象',
			'txhj_qianchaotongren':'前朝铜人',
			'txhj_hanlingdi':'汉灵帝',
			'txhj_baxiaoweishouling':'八校尉首领',
			'txhj_shiemoxing':'释厄魔星',
			'txhj_wujiaoxinmo':'乌角心魔',
			'txhj_huanjinglingzhu':'幻境领主',
			'txhj_tongrenjumo':'铜人巨魔',
			'txhj_tiaopibubu':'调皮岁岁',
			'txhj_tianjijushou':'天机巨兽',
		},
    };
    if(lib.device||lib.node){
        for(var i in game.NPCPack.character){
            game.NPCPack.character[i][4].push('ext:太虚幻境/image/NPC/'+i+'.jpg');
        }
    } else{
        for(var i in game.NPCPack.character){
            game.NPCPack.character[i][4].push('db:extension-太虚幻境/image/NPC:'+i+'.jpg');
        }
    }
    game.addCharacterPack(game.NPCPack,"太虚幻境");
    return {};
});