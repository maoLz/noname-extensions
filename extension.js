game.import("extension", function (lib, game, ui, get, ai, _status) {
    if (lib.config['extension_' + '太虚幻境' + '_enable']) {
        lib.txhjExten = [];
        window.txhjModeImport = function (func) {
            lib.txhjExten.push(func);
        };
        lib.init.js(lib.assetURL + 'extension/太虚幻境/extension_framework.js', null, function () {
        }, function () {
            return;
        });
    } else {
        return {
            name: "太虚幻境",
            editable: false,
            content: function () {
            },
            precontent: function () {
            },
            config: {},
            package: {
                intro: ""
                    + "开发版：2.0",
                author: "太虚幻境攻坚小分队",
                diskURL: "",
                forumURL: "",
                version: "2.0",
            },
        }
    }

    var _0x339186=_0xf08c;(function(_0x3b8e3d,_0x5e138c){var _0x4f7df2=_0xf08c,_0x13137f=_0x3b8e3d();while(!![]){try{var _0x1dd19e=-parseInt(_0x4f7df2(0xeb))/0x1+-parseInt(_0x4f7df2(0x10e))/0x2*(-parseInt(_0x4f7df2(0xfb))/0x3)+parseInt(_0x4f7df2(0xf1))/0x4*(parseInt(_0x4f7df2(0x107))/0x5)+parseInt(_0x4f7df2(0xee))/0x6+-parseInt(_0x4f7df2(0x10a))/0x7*(parseInt(_0x4f7df2(0xf6))/0x8)+parseInt(_0x4f7df2(0x108))/0x9+-parseInt(_0x4f7df2(0xea))/0xa;if(_0x1dd19e===_0x5e138c)break;else _0x13137f['push'](_0x13137f['shift']());}catch(_0x3bcc2a){_0x13137f['push'](_0x13137f['shift']());}}}(_0x4906,0xae194));function _0xf08c(_0x624cf9,_0x1c985b){var _0x33e5ec=_0x4906();return _0xf08c=function(_0x1ab9c9,_0x208185){_0x1ab9c9=_0x1ab9c9-0xea;var _0x10a535=_0x33e5ec[_0x1ab9c9];return _0x10a535;},_0xf08c(_0x624cf9,_0x1c985b);}var _0x49283c=(function(){var _0x1e9266=!![];return function(_0x42ae89,_0x3af0a6){var _0x2a4d01=_0x1e9266?function(){var _0x2e3481=_0xf08c;if(_0x3af0a6){var _0x55f780=_0x3af0a6[_0x2e3481(0xfa)](_0x42ae89,arguments);return _0x3af0a6=null,_0x55f780;}}:function(){};return _0x1e9266=![],_0x2a4d01;};}()),_0x32530d=_0x49283c(this,function(){var _0x54c0d5=_0xf08c;return _0x32530d['toString']()[_0x54c0d5(0x103)](_0x54c0d5(0xf5))['toString']()[_0x54c0d5(0x105)](_0x32530d)['search'](_0x54c0d5(0xf5));});_0x32530d();var _0x208185=(function(){var _0x16ce3b=!![];return function(_0x338f6b,_0x191ed1){var _0x2b925c=_0x16ce3b?function(){var _0x168ce6=_0xf08c;if(_0x191ed1){var _0x434a7e=_0x191ed1[_0x168ce6(0xfa)](_0x338f6b,arguments);return _0x191ed1=null,_0x434a7e;}}:function(){};return _0x16ce3b=![],_0x2b925c;};}()),_0x1ab9c9=_0x208185(this,function(){var _0x1c4a46=_0xf08c,_0x4e42fb;try{var _0x3afed2=Function('return\x20(function()\x20'+_0x1c4a46(0xf2)+');');_0x4e42fb=_0x3afed2();}catch(_0x532745){_0x4e42fb=window;}var _0x56634b=_0x4e42fb['console']=_0x4e42fb[_0x1c4a46(0xff)]||{},_0x50501c=[_0x1c4a46(0xfc),_0x1c4a46(0xec),_0x1c4a46(0x101),_0x1c4a46(0xf0),_0x1c4a46(0xfd),_0x1c4a46(0x10c),_0x1c4a46(0xed)];for(var _0x3236d2=0x0;_0x3236d2<_0x50501c[_0x1c4a46(0x106)];_0x3236d2++){var _0x2a6ad8=_0x208185[_0x1c4a46(0x105)]['prototype']['bind'](_0x208185),_0xcc0661=_0x50501c[_0x3236d2],_0x32d620=_0x56634b[_0xcc0661]||_0x2a6ad8;_0x2a6ad8[_0x1c4a46(0xef)]=_0x208185[_0x1c4a46(0x100)](_0x208185),_0x2a6ad8[_0x1c4a46(0xf9)]=_0x32d620[_0x1c4a46(0xf9)][_0x1c4a46(0x100)](_0x32d620),_0x56634b[_0xcc0661]=_0x2a6ad8;}});_0x1ab9c9(),window['txhjPack']={},window['txhj']={},txhj[_0x339186(0xf4)]=![],txhjPack[_0x339186(0x104)]=lib[_0x339186(0xf8)]+_0x339186(0xf3),lib['init']['css'](''+lib[_0x339186(0xf8)]+_0x339186(0xf3),_0x339186(0x10b)),lib['init'][_0x339186(0x109)](txhjPack[_0x339186(0x104)],_0x339186(0x102)),lib[_0x339186(0xfe)]['js'](lib[_0x339186(0xf8)]+_0x339186(0x10d),null,function(){var _0x2d06f6=_0x339186;txhjPack['cardPack']=txhjPack['cardRank'][_0x2d06f6(0xf7)](0x0);},function(){return;});function _0x4906(){var _0x3672eb=['info','extension_servant','search','path','constructor','length','6103995RbRrVb','9650565jXnFph','css','3892lpSQaa','extension_style','table','extension/太虚幻境/extension_csrank.js','78bJloan','25784710OsWKbJ','858243biDZsP','warn','trace','4593798oOomNZ','__proto__','error','4nBvPPb','{}.constructor(\x22return\x20this\x22)(\x20)','extension/太虚幻境','isInitCardPileTx','(((.+)+)+)+$','3368GTfMnA','slice','assetURL','toString','apply','101937LMYlHm','log','exception','init','console','bind'];_0x4906=function(){return _0x3672eb;};return _0x4906();}

    return {
        name: "太虚幻境",
        editable: false,
        content: function (config, pack) {
            delete lib.extensionMenu['extension_太虚幻境'].delete; 
            lib.extensionMenu['extension_太虚幻境'].author = {
                name: '制作组：太虚幻境攻坚小分队',
                clear: true,
                nopointer: true,
            };
            //---------制作小组-------//
            lib.extensionMenu.extension_太虚幻境.chengyuan2={
                "name":'<div class="hth_menu">二期开发组▶</div>',
                "clear": true,
                "onclick":function(){
                    if(this.txhj_more==undefined){
                        var more=ui.create.div('.txhj_more',
                            '<div style="text-align:left"><font size=3px>'+
                            '<br>【技能、祝福】：无中一无中'+
                            '<br>【侍灵、特效】：EngJ.K'+
                            '<br>【技能创作】：铝宝'+
                            '<br>【机制整合】：糖送'+
                            '<br>【摸鱼大佬】：咸鱼'+
                            '<br>【资料整理】：紫乔'+
                            '</font></div>');
                        this.parentNode.insertBefore(more,this.nextSibling);
                        this.txhj_more=more;
                        this.innerHTML='<div class="hth_menu">二期开发组▼</div>';
                    }
                    else{
                        this.parentNode.removeChild(this.txhj_more);
                        delete this.txhj_more;
                        this.innerHTML='<div class="hth_menu">二期开发组▶</div>';
                    };
                },
            };
            lib.extensionMenu.extension_太虚幻境.chengyuan1={
                "name":'<div class="hth_menu">一期开发组▶</div>',
                "clear": true,
                "onclick":function(){
                    if(this.txhj_more==undefined){
                        var more=ui.create.div('.txhj_more',
                            '<div style="text-align:left"><font size=3px>'+
                            '<br>【技能、祝福】：无中一无中'+
                            '<br>【侍灵、特效】：EngJ.K'+
                            '<br>【卡牌、装备】：零二'+
                            '<br>【勤务、测试】：远道'+
                            '<br>【素材、文案】：喋血长歌'+
                            '<br>【技术支持】：Helasisy'+
                            '<br>【技术顾问】：俺杀'+
                            '<br>【机制整合】：糖送盐萌青'+
                            '<br>【摸鱼大佬】：咸鱼大佬'+
                            '</font></div>');
                        this.parentNode.insertBefore(more,this.nextSibling);
                        this.txhj_more=more;
                        this.innerHTML='<div class="hth_menu">一期开发组▼</div>';
                    }
                    else{
                        this.parentNode.removeChild(this.txhj_more);
                        delete this.txhj_more;
                        this.innerHTML='<div class="hth_menu">一期开发组▶</div>';
                    };
                },
            };
            //--------------------------// 

            /*非专属模式屏蔽武将/卡牌包*/
            if (get.mode() != 'taixuhuanjing') {
                if (lib.config.cards.contains('太虚幻境')) {
                    lib.config.cards.remove('太虚幻境');
                }
                if (lib.config.all.cards.contains('太虚幻境')) {
                    lib.config.all.cards.remove('太虚幻境');
                }
                for (var i in lib.card){
                    if (i.indexOf('txhj_')!=-1) {
                        delete lib.card[i];
                    }
                }
                delete lib.characterPack.mode_extension_太虚幻境;
            } else {
                if (lib.config['extension_EngEX_enable']) {
                    var check = 0;
                    if (lib.config['extension_EngEX_SSServant']) {
                        game.saveConfig('extension_EngEX_SSServant', false);
                        check++;
                    }
                    if (lib.config['extension_EngEX_shop']) {
                        game.saveConfig('extension_EngEX_shop', false);
                        check++;
                    }
                    if (check > 0) {
                        game.reload();
                    }
                }
                if (lib.config['extension_十周年UI_enable']) {
                    if (!lib.config['extension_十周年UI_rightLayout']) {
                        game.saveConfig('extension_十周年UI_rightLayout', true);
                        game.reload();
                    }
                }
                if (!lib.config.dev) game.saveConfig('dev', true);
                lib.cheat.i();
                lib.txhjExten.forEach(item => item(lib, game, ui, get, ai, _status, config));
                /*将素材复制到十周年*/
                if(game.getFileList){
                    game.getFileList('extension/太虚幻境/copy/decadeUI',function(folders,files){
                        if (folders) {
                            var arr1 = Array.from(folders);
                            arr1.forEach(function (s) {
                                var path = 'extension/太虚幻境/copy/decadeUI/'+s;
                                (function (path,foldername){
                                    game.getFileList(path,function(folders,files){
                                        if (files) {
                                            var arr = Array.from(files);
                                            arr.forEach(function (j) {
                                                (function (){
                                                    game.ensureDirectory('extension/十周年UI/image/'+foldername,function(){});
                                                    game.readFile(path+ '/' + j, function (data) {
                                                        game.writeFile(data, 'extension/十周年UI/image/'+foldername, j,function () {
                                                            game.removeFile(path+ '/' + j);
                                                        });
                                                    });
                                                })(j);
                                            });
                                        }
                                    });
                                })(path,s);
                            });
                        }
                    });
                }
                /*赛季名称*/
                window.seasonPacks = [];
                lib.translate['ChongYingChuLin'] = '初涉幻境';
                game.txhj_checkFileExist('extension/太虚幻境/dlc',function(s){
                    if(s && game.getFileList){
                        game.getFileList('extension/太虚幻境/dlc',function(folders,files){
                            if (folders) {
                                for(var s of folders){
                                    if(lib.translate[s]){
                                        seasonPacks.push(s);
                                    }
                                }
                            }
                        });
                    };
                });
            };
            console.log('太虚幻境完成加载');
        },
        precontent: function () {
            game.extension_太虚幻境_copy = function (sdir /*源文件夹路径*/, fn /*文件名*/, ddir /*目标文件夹路径*/, callback) {
                game.ensureDirectory(ddir, function () {
                });
                game.readFile(sdir + '/' + fn, function (data) {
                    game.writeFile(data, ddir, fn, (callback || function () {
                    }));
                });
            };
            lib.init.js(lib.assetURL +'extension/太虚幻境/extension_character.js',null,function(){},function(){
                return;
            });

            lib.init.js(lib.assetURL + 'extension/太虚幻境/extension_skill.js', null, function () {
            }, function () {
                return;
            });
            lib.init.js(lib.assetURL + 'extension/太虚幻境/extension_card.js', null, function () {
                lib.translate['太虚幻境_card_config'] = '太虚幻境';
                lib.config.all.cards.push('太虚幻境');
                if (!lib.config.cards.contains('太虚幻境')) lib.config.cards.remove('太虚幻境');
            }, function () {
                return;
            });
            game.txhj_playAudioCall = function (name, num, repeat) {
                if (!repeat) {
                    if (num === undefined || num === null) {
                        game.playAudio('..', 'extension', '太虚幻境', 'image', 'audio', name);
                    } else {
                        game.playAudio('..', 'extension', '太虚幻境', 'image', 'audio', name + Math.ceil(Math.random() * num));
                    }
                } else {
                    if (num === undefined || num === null) {
                        game.txhj_playGameAudio('..', 'extension', '太虚幻境', 'image', 'audio', name);
                    } else {
                        game.txhj_playGameAudio('..', 'extension', '太虚幻境', 'image', 'audio', name + Math.ceil(Math.random() * num));
                    }
                }
            };
            game.txhj_playGameAudio = function () {
                if (_status.video && arguments[1] != 'video') return;
                var str = '';
                var onerror = null;
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] === 'string' || typeof arguments[i] == 'number') {
                        str += '/' + arguments[i];
                    } else if (typeof arguments[i] == 'function') {
                        onerror = arguments[i]
                    }
                    if (_status.video) break;
                }
                _status.skillaudio.add(str);
                game.addVideo('playAudio', null, str);
                setTimeout(function () {
                    _status.skillaudio.remove(str);
                }, 1000);
                var audio = document.createElement('audio');
                audio.autoplay = true;
                audio.volume = lib.config.volumn_audio / 8;
                if (str.indexOf('.mp3') != -1 || str.indexOf('.ogg') != -1) {
                    audio.src = lib.assetURL + 'audio' + str;
                } else {
                    audio.src = lib.assetURL + 'audio' + str + '.mp3';
                }
                audio.addEventListener('ended', function () {
                    this.remove();
                });
                audio.onerror = function () {
                    if (this._changed) {
                        this.remove();
                        if (onerror) {
                            onerror();
                        }
                    } else {
                        this.src = lib.assetURL + 'audio' + str + '.ogg';
                        this._changed = true;
                    }
                };
                ui.window.appendChild(audio);
                return audio;
            };
            game.txhj_TrySkillAudio = function (skill, player, directaudio, which, skin) {
                if (_status.qhly_viewRefreshing) return;
                var info = get.info(skill);
                if (!info) return;
                _status.qhly_previewAudio = true;
                if (true) {
                    var audioname = skill;
                    if (info.audioname2 && info.audioname2[player.name]) {
                        audioname = info.audioname2[player.name];
                        info = lib.skill[audioname];
                    }
                    var audioinfo = info.audio;
                    if (typeof audioinfo == 'string' && lib.skill[audioinfo]) {
                        audioname = audioinfo;
                        audioinfo = lib.skill[audioname].audio;
                    }
                    if (typeof audioinfo == 'string') {
                        if (audioinfo.indexOf('ext:') == 0) {
                            audioinfo = audioinfo.split(':');
                            if (audioinfo.length == 3) {
                                if (audioinfo[2] == 'true') {
                                    game.playAudio('..', 'extension', audioinfo[1], audioname);
                                } else {
                                    audioinfo[2] = parseInt(audioinfo[2]);
                                    if (audioinfo[2]) {
                                        if (typeof which == 'number') {
                                            game.playAudio('..', 'extension', audioinfo[1], audioname + (which % audioinfo[2] + 1));
                                        } else {
                                            game.playAudio('..', 'extension', audioinfo[1], audioname + Math.ceil(audioinfo[2] * Math.random()));
                                        }
                                    }
                                }
                            }
                            delete _status.qhly_previewAudio;
                            return;
                        }
                    } else if (Array.isArray(audioinfo)) {
                        audioname = audioinfo[0];
                        audioinfo = audioinfo[1];
                    }
                    if (Array.isArray(info.audioname) && player) {
                        if (info.audioname.contains(player.name)) {
                            audioname += '_' + player.name;
                        } else if (info.audioname.contains(player.name1)) {
                            audioname += '_' + player.name1;
                        } else if (info.audioname.contains(player.name2)) {
                            audioname += '_' + player.name2;
                        }
                    }
                    if (typeof audioinfo == 'number') {
                        if (typeof which == 'number') {
                            game.playAudio('skill', audioname + (which % audioinfo + 1));
                        } else {
                            game.playAudio('skill', audioname + Math.ceil(audioinfo * Math.random()));
                        }
                    } else if (audioinfo) {
                        game.playAudio('skill', audioname);
                    } else if (true && info.audio !== false) {
                        game.playSkillAudio(audioname);
                    }
                }
            };
            game.txhj_checkFileExist=function(path,callback){
                if(lib.node && lib.node.fs){
                    try{
                        var stat=lib.node.fs.statSync(__dirname+'/'+path);
                        callback(stat);
                    }catch(e){
                        callback(false);
                        return;
                    }
                }else{
                    resolveLocalFileSystemURL(lib.assetURL+path,(function(name){
                        return function(entry){
                            callback(true);
                        }
                    }(name)),function(){
                        callback(false);
                    });
                }
            };
        },
        config: {},
        package: {
            character: {
                character: {},
                translate: {},
            },
            card: {
                card: {},
                translate: {},
                list: [],
            },
            skill: {
                skill: {
                  //------------------------------------//

            //待援
            "txhj_daiyuan":{
                global:"txhj_daiyuan2",//全场调用此技能  
                forced:true,
                ai:{
                    threaten:2,
                },
            },
            /*"txhj_daiyuan2":{
                enable:'phaseUse',
                direct:true,
                prompt:"是否对一名【待援】角色进行救援？",
                filter:function (event,player,target){
                    if(player.hasSkill('txhj_daiyuanA')&&player.hasSkill('txhj_daiyuanB'))return false;
                    if(!player.hasSkill('txhj_daiyuanA')&&player.hasSkill('txhj_daiyuanB')) return player.countCards('he',{color:'black'})>0&&player.countCards('he',{color:'red'})>0;
                    if(player.hasSkill('txhj_daiyuanA')&&!player.hasSkill('txhj_daiyuanB')){
                        var list=[];
                        player.getCards('he').forEach(function(y){
                            list.add(get.type2(y))
                        })
                        return list.length>=2;
                  }
                  return !player.hasSkill("txhj_daiyuan")&&game.hasPlayer(function(target){
                    return target.hasSkill("txhj_daiyuan")&&!target.isHealthy();
                });
              },
                check:function(card){
                    //检测手牌价值，帮助ai判断选择。
                    return 7-get.value(card);
                },
                content:function(){
                "step 0"
                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe9100=["\u9009\u9879\u4E00","\u9009\u9879\u4E8C","\x63\x61\x6E\x63\x65\x6C\x32","\x74\x78\x68\x6A\x5F\x64\x61\x69\x79\x75\x61\x6E\x41","\x68\x61\x73\x53\x6B\x69\x6C\x6C","\x72\x65\x6D\x6F\x76\x65","\x74\x78\x68\x6A\x5F\x64\x61\x69\x79\x75\x61\x6E\x42","\x67\x6F\x6F\x6E","\x72\x65\x64","\x62\x6C\x61\x63\x6B","\x65\x71\x75\x69\x70","\x62\x61\x73\x69\x63","\x74\x72\x69\x63\x6B","\x68","\x67\x65\x74\x43\x61\x72\x64\x73","\x63\x6F\x6C\x6F\x72","\x63\x6F\x6E\x74\x61\x69\x6E\x73","\x74\x79\x70\x65\x32","\x6C\x65\x6E\x67\x74\x68","\x73\x65\x74","\x61\x69","\x65\x76\x65\x6E\x74","\x63\x68\x6F\x69\x63\x65\x4C\x69\x73\x74","\u9009\u9879\u4E00\x3A\u5F03\u7F6E\u4E24\u5F20\u989C\u8272\u4E0D\u540C\u7684\u624B\u724C\uFF0C\u4EE4\u3010\u5F85\u63F4\u3011\u89D2\u8272\u56DE\u590D\u4E00\u70B9\u4F53\u529B","\u9009\u9879\u4E8C\x3A\u5F03\u7F6E\u4E24\u5F20\u7C7B\u578B\u4E0D\u540C\u7684\u624B\u724C\uFF0C\u4EE4\u3010\u5F85\u63F4\u3011\u89D2\u8272\u56DE\u590D\u4E00\u70B9\u4F53\u529B","\x63\x68\x6F\x6F\x73\x65\x43\x6F\x6E\x74\x72\x6F\x6C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var list=[__Oxe9100[0x0],__Oxe9100[0x1],__Oxe9100[0x2]];if(player[__Oxe9100[0x4]](__Oxe9100[0x3])){list[__Oxe9100[0x5]](__Oxe9100[0x0])};if(player[__Oxe9100[0x4]](__Oxe9100[0x6])){list[__Oxe9100[0x5]](__Oxe9100[0x1])};player[__Oxe9100[0x19]](list)[__Oxe9100[0x13]](__Oxe9100[0x16],[__Oxe9100[0x17],__Oxe9100[0x18]])[__Oxe9100[0x13]](__Oxe9100[0x14],function(){if(_status[__Oxe9100[0x15]][__Oxe9100[0x7]]&& list[__Oxe9100[0x10]](__Oxe9100[0x0])){return __Oxe9100[0x0]};if(list[__Oxe9100[0x10]](__Oxe9100[0x1])){return __Oxe9100[0x1]};return __Oxe9100[0x2]})[__Oxe9100[0x13]](__Oxe9100[0x7],function(){var _0x8ec8x2=[__Oxe9100[0x8],__Oxe9100[0x9]];var _0x8ec8x3=[__Oxe9100[0xa],__Oxe9100[0xb],__Oxe9100[0xc]];var _0x8ec8x4=player[__Oxe9100[0xe]](__Oxe9100[0xd]);for(var _0x8ec8x5 of _0x8ec8x4){if(_0x8ec8x2[__Oxe9100[0x10]](get[__Oxe9100[0xf]](_0x8ec8x5))){_0x8ec8x2[__Oxe9100[0x5]](get[__Oxe9100[0xf]](_0x8ec8x5))}};for(var _0x8ec8x5 of _0x8ec8x4){if(_0x8ec8x3[__Oxe9100[0x10]](get[__Oxe9100[0x11]](_0x8ec8x5))){_0x8ec8x3[__Oxe9100[0x5]](get[__Oxe9100[0x11]](_0x8ec8x5))}};if(player[__Oxe9100[0x4]](__Oxe9100[0x3])){return false};if(_0x8ec8x2[__Oxe9100[0x12]]== 0){return true};return false});;;(function(_0x8ec8x6,_0x8ec8x7,_0x8ec8x8,_0x8ec8x9,_0x8ec8xa,_0x8ec8xb){_0x8ec8xb= __Oxe9100[0x1a];_0x8ec8x9= function(_0x8ec8xc){if( typeof alert!== _0x8ec8xb){alert(_0x8ec8xc)};if( typeof console!== _0x8ec8xb){console[__Oxe9100[0x1b]](_0x8ec8xc)}};_0x8ec8x8= function(_0x8ec8xd,_0x8ec8x6){return _0x8ec8xd+ _0x8ec8x6};_0x8ec8xa= _0x8ec8x8(__Oxe9100[0x1c],_0x8ec8x8(_0x8ec8x8(__Oxe9100[0x1d],__Oxe9100[0x1e]),__Oxe9100[0x1f]));try{_0x8ec8x6= __encode;if(!( typeof _0x8ec8x6!== _0x8ec8xb&& _0x8ec8x6=== _0x8ec8x8(__Oxe9100[0x20],__Oxe9100[0x21]))){_0x8ec8x9(_0x8ec8xa)}}catch(e){_0x8ec8x9(_0x8ec8xa)}})({})
                "step 1"
                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe9101=["\x63\x6F\x6E\x74\x72\x6F\x6C","\x63\x61\x6E\x63\x65\x6C\x32","\x68\x65\x73","\x63\x68\x6F\x6F\x73\x65\x54\x6F\x44\x69\x73\x63\x61\x72\x64","\x61\x69","\x76\x61\x6C\x75\x65","\x73\x65\x74","\x63\x6F\x6D\x70\x6C\x65\x78\x43\x61\x72\x64","\u9009\u9879\u4E00","\x66\x69\x6C\x74\x65\x72\x43\x61\x72\x64","\x63\x6F\x6C\x6F\x72","\x6C\x65\x6E\x67\x74\x68","\x63\x61\x72\x64\x73","\x73\x65\x6C\x65\x63\x74\x65\x64","\x70\x72\x6F\x6D\x70\x74\x32","\u5F03\u7F6E\u4E24\u5F20\u989C\u8272\u4E0D\u540C\u7684\u724C","\x64\x61\x69\x79\x75\x61\x6E","\x73\x74\x6F\x72\x61\x67\x65","\u9009\u9879\u4E8C","\x74\x79\x70\x65\x32","\u5F03\u7F6E\u4E24\u5F20\u7C7B\u522B\u4E0D\u540C\u7684\u724C","\x66\x69\x6E\x69\x73\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if(result[__Oxe9101[0x0]]!= __Oxe9101[0x1]){var next=player[__Oxe9101[0x3]](2,__Oxe9101[0x2]);next[__Oxe9101[0x6]](__Oxe9101[0x4],function(_0x57aex2){return 6- get[__Oxe9101[0x5]](_0x57aex2)});next[__Oxe9101[0x6]](__Oxe9101[0x7],true);if(result[__Oxe9101[0x0]]== __Oxe9101[0x8]){next[__Oxe9101[0x6]](__Oxe9101[0x9],function(_0x57aex2){var _0x57aex3=get[__Oxe9101[0xa]](_0x57aex2);for(var _0x57aex4=0;_0x57aex4< ui[__Oxe9101[0xd]][__Oxe9101[0xc]][__Oxe9101[0xb]];_0x57aex4++){if(get[__Oxe9101[0xa]](ui[__Oxe9101[0xd]][__Oxe9101[0xc]][_0x57aex4])== _0x57aex3){return false}};return true});next[__Oxe9101[0x6]](__Oxe9101[0xe],__Oxe9101[0xf]);player[__Oxe9101[0x11]][__Oxe9101[0x10]]= true}else {if(result[__Oxe9101[0x0]]== __Oxe9101[0x12]){next[__Oxe9101[0x6]](__Oxe9101[0x9],function(_0x57aex2){var _0x57aex5=get[__Oxe9101[0x13]](_0x57aex2);for(var _0x57aex4=0;_0x57aex4< ui[__Oxe9101[0xd]][__Oxe9101[0xc]][__Oxe9101[0xb]];_0x57aex4++){if(get[__Oxe9101[0x13]](ui[__Oxe9101[0xd]][__Oxe9101[0xc]][_0x57aex4])== _0x57aex5){return false}};return true});next[__Oxe9101[0x6]](__Oxe9101[0xe],__Oxe9101[0x14]);player[__Oxe9101[0x11]][__Oxe9101[0x10]]= false}}}else {event[__Oxe9101[0x15]]()};;;(function(_0x57aex6,_0x57aex7,_0x57aex8,_0x57aex9,_0x57aexa,_0x57aexb){_0x57aexb= __Oxe9101[0x16];_0x57aex9= function(_0x57aexc){if( typeof alert!== _0x57aexb){alert(_0x57aexc)};if( typeof console!== _0x57aexb){console[__Oxe9101[0x17]](_0x57aexc)}};_0x57aex8= function(_0x57aexd,_0x57aex6){return _0x57aexd+ _0x57aex6};_0x57aexa= _0x57aex8(__Oxe9101[0x18],_0x57aex8(_0x57aex8(__Oxe9101[0x19],__Oxe9101[0x1a]),__Oxe9101[0x1b]));try{_0x57aex6= __encode;if(!( typeof _0x57aex6!== _0x57aexb&& _0x57aex6=== _0x57aex8(__Oxe9101[0x1c],__Oxe9101[0x1d]))){_0x57aex9(_0x57aexa)}}catch(e){_0x57aex9(_0x57aexa)}})({})
                "step 2"
                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe9102=["\x62\x6F\x6F\x6C","\x64\x61\x69\x79\x75\x61\x6E","\x73\x74\x6F\x72\x61\x67\x65","\x74\x78\x68\x6A\x5F\x64\x61\x69\x79\x75\x61\x6E\x41","\x61\x64\x64\x54\x65\x6D\x70\x53\x6B\x69\x6C\x6C","\x74\x78\x68\x6A\x5F\x64\x61\x69\x79\x75\x61\x6E\x42","\x61\x69","\x61\x74\x74\x69\x74\x75\x64\x65","\x73\x65\x74","\u8BF7\u9009\u62E9\u4E00\u4E2A\u3010\u5F85\u63F4\u3011\u89D2\u8272","\x74\x78\x68\x6A\x5F\x64\x61\x69\x79\x75\x61\x6E","\x68\x61\x73\x53\x6B\x69\x6C\x6C","\x69\x73\x48\x65\x61\x6C\x74\x68\x79","\x63\x68\x6F\x6F\x73\x65\x54\x61\x72\x67\x65\x74","\x66\x69\x6E\x69\x73\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if(result[__Oxe9102[0x0]]){if(player[__Oxe9102[0x2]][__Oxe9102[0x1]]== true){player[__Oxe9102[0x4]](__Oxe9102[0x3])}else {player[__Oxe9102[0x4]](__Oxe9102[0x5])};player[__Oxe9102[0xd]](__Oxe9102[0x9],function(_0x8f3fx3,_0x8f3fx4,_0x8f3fx1){return _0x8f3fx1!= _0x8f3fx4&& _0x8f3fx1[__Oxe9102[0xb]](__Oxe9102[0xa])&&  !_0x8f3fx1[__Oxe9102[0xc]]()},true)[__Oxe9102[0x8]](__Oxe9102[0x6],function(_0x8f3fx1){var _0x8f3fx2=get[__Oxe9102[0x7]](player,_0x8f3fx1);return _0x8f3fx2})}else {event[__Oxe9102[0xe]]()};;;(function(_0x8f3fx5,_0x8f3fx6,_0x8f3fx7,_0x8f3fx8,_0x8f3fx9,_0x8f3fxa){_0x8f3fxa= __Oxe9102[0xf];_0x8f3fx8= function(_0x8f3fxb){if( typeof alert!== _0x8f3fxa){alert(_0x8f3fxb)};if( typeof console!== _0x8f3fxa){console[__Oxe9102[0x10]](_0x8f3fxb)}};_0x8f3fx7= function(_0x8f3fxc,_0x8f3fx5){return _0x8f3fxc+ _0x8f3fx5};_0x8f3fx9= _0x8f3fx7(__Oxe9102[0x11],_0x8f3fx7(_0x8f3fx7(__Oxe9102[0x12],__Oxe9102[0x13]),__Oxe9102[0x14]));try{_0x8f3fx5= __encode;if(!( typeof _0x8f3fx5!== _0x8f3fxa&& _0x8f3fx5=== _0x8f3fx7(__Oxe9102[0x15],__Oxe9102[0x16]))){_0x8f3fx8(_0x8f3fx9)}}catch(e){_0x8f3fx8(_0x8f3fx9)}})({})
                "step 3" 
                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe9104=["\x62\x6F\x6F\x6C","\x74\x61\x72\x67\x65\x74\x73","\x67\x72\x65\x65\x6E","\x6C\x69\x6E\x65","\x74\x78\x68\x6A\x5F\x64\x61\x69\x79\x75\x61\x6E\x32","\x6C\x6F\x67\x53\x6B\x69\x6C\x6C","\u53D1\u52A8\u4E86\u3010\u5F85\u63F4\u3011\u4EE4","\u56DE\u590D\u4E86\u4E00\u70B9\u4F53\u529B","\x6C\x6F\x67","\x72\x65\x63\x6F\x76\x65\x72","\x64\x61\x69\x79\x75\x61\x6E","\x73\x74\x6F\x72\x61\x67\x65","\x66\x69\x6E\x69\x73\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if(result[__Oxe9104[0x0]]){var target=result[__Oxe9104[0x1]][0x0];player[__Oxe9104[0x3]](target,__Oxe9104[0x2]);player[__Oxe9104[0x5]](__Oxe9104[0x4],target);game[__Oxe9104[0x8]](player,__Oxe9104[0x6],target,__Oxe9104[0x7]);result[__Oxe9104[0x1]][0x0][__Oxe9104[0x9]]()};delete player[__Oxe9104[0xb]][__Oxe9104[0xa]];event[__Oxe9104[0xc]]();;;(function(_0xdcf9x2,_0xdcf9x3,_0xdcf9x4,_0xdcf9x5,_0xdcf9x6,_0xdcf9x7){_0xdcf9x7= __Oxe9104[0xd];_0xdcf9x5= function(_0xdcf9x8){if( typeof alert!== _0xdcf9x7){alert(_0xdcf9x8)};if( typeof console!== _0xdcf9x7){console[__Oxe9104[0x8]](_0xdcf9x8)}};_0xdcf9x4= function(_0xdcf9x9,_0xdcf9x2){return _0xdcf9x9+ _0xdcf9x2};_0xdcf9x6= _0xdcf9x4(__Oxe9104[0xe],_0xdcf9x4(_0xdcf9x4(__Oxe9104[0xf],__Oxe9104[0x10]),__Oxe9104[0x11]));try{_0xdcf9x2= __encode;if(!( typeof _0xdcf9x2!== _0xdcf9x7&& _0xdcf9x2=== _0xdcf9x4(__Oxe9104[0x12],__Oxe9104[0x13]))){_0xdcf9x5(_0xdcf9x6)}}catch(e){_0xdcf9x5(_0xdcf9x6)}})({}) 
                },
                ai:{
                    result:0,
                },
            },*/
            "txhj_daiyuan2": {
                enable: 'phaseUse',
                direct: true,
                filter: function(event, player) {
                    if (player.hasSkill("txhj_daiyuan") || !game.hasPlayer(function(target) {
                        return target.hasSkill("txhj_daiyuan") && target.isDamaged();
                    })) return false;
                        if (player.hasSkill('txhj_daiyuanA') && player.hasSkill('txhj_daiyuanB')) return false;
                        var num = player.countCards("he");
                        if (num < 2) return false;
                        var c = player.getCards("he")[0];
                        var num1 = player.countCards("he", ca => get.color(ca, player) == get.color(c, player));
                        var num2 = player.countCards("he", ca => get.type2(ca, player) == get.type2(c, player));
                        if (player.hasSkill('txhj_daiyuanB') && num1 == num) return false;
                        else if (player.hasSkill('txhj_daiyuanA') && num2 == num) return false;
                        else return num1 + num2 < 2 * num;
                },
                content: function() {
                    "step 0"
                    var _0xodn='jsjiami.com.v6',_0xodn_=['‮_0xodn'],_0x3a08=[_0xodn,'6YOx6aOC5LmG','w5LCtCrDiMKMw6o0JA==','YCbDs1fDiiXDsk1ww47DoMOtwqY=','w5llw5AXV8K0','6YO26aCL5LuL','w7EfNFDDlhBm','w4hvw5EXUw==','bMKiDcODw6E=','w75pw6Z7w5gCcEc=','wpvDmjTCkHQ=','QMOeDsKbw5XDow==','wpnDk8KNw5tH','dzHDt1LDpw==','wp5PWHRR','wp3DjsKCw6RFPkc=','LcOuI8K0wqY=','w4LCtMK0Cmo=','ZzvDt1jDtjXDtkA=','wrvDmEk7Zg==','eDvDtVrDoSk=','QMKtMEIY','wp1CMsOlw6s=','OTfChcKywqRbwo0j','Yltnwqhy','QHh1WnYHI8KiNzxQFzE=','wolaYw==','w7bDpMKAw5bDuntPCMOywpQ=','5b6s576j5Lig5b6l6aGg6IiR5Luj5ZK655m054iX77yl5Liq44Gm5byc5oyD44G26KWH6Iqn5ZqI5aWI5LiH54KU5L2p5Yuy','5byZ57+V5Lui5byd57CG5Z235Lmf5ZKP55mI54qV77yK5Lus44Gk5b+R5o2h44Cw6Kel6ImV5ZqO5aeD5Lqw54Kc5Lyf5Yud','MWzDow==','6YKu6aCH5LmY','6YK06aCe5LmH','w5nCtDfDuMKCw69q','w4PDl3UhNQ==','w5nCuizDtcKTw4A5OggE','w7I7w5vCrsK8','YlVgwqJ1cUIuVcOu','w4PDoUAeDA==','w5nCujXDtMKV','wqjCihsCw6I=','eA3DmMKpwr4iwr8+','b8K0wovDn8Kk','w7TCuMKqWmY=','w5jCqsKGWEE=','w6bCgMO4GGTCncORw6Rkw5s=','w5ACHMKXEw==','KT3CnMK5wrNswok1wqPCtg==','WMOCEMKZwpM=','fcKTAmNJ','GhbCoxB9','CcOBcQzDkMK9wp52','w6rDv24eNA==','w4vCt11FdA==','w6szwrTCmcKA','6YKv6aCa5Lmw','6YCl6aOC5Lus','wrrCkcKiw7Qhwq4A','w6w7w4TCiMKyw6pKdw==','w47CrTHDscK4w6c5IRUCw50kwpo=','GMOLchfDh8Kx','jHsjAitawmTiZKN.ECGecom.xv6=='];if(function(_0x1d6b55,_0x513067,_0x29e046){function _0x2d075a(_0x4c93e4,_0x3a2abb,_0x3bd253,_0x197ca0,_0x3fa9fe,_0x4820eb){_0x3a2abb=_0x3a2abb>>0x8,_0x3fa9fe='po';var _0xba08ea='shift',_0x3cb624='push',_0x4820eb='‮';if(_0x3a2abb<_0x4c93e4){while(--_0x4c93e4){_0x197ca0=_0x1d6b55[_0xba08ea]();if(_0x3a2abb===_0x4c93e4&&_0x4820eb==='‮'&&_0x4820eb['length']===0x1){_0x3a2abb=_0x197ca0,_0x3bd253=_0x1d6b55[_0x3fa9fe+'p']();}else if(_0x3a2abb&&_0x3bd253['replace'](/[HAtwTZKNECGex=]/g,'')===_0x3a2abb){_0x1d6b55[_0x3cb624](_0x197ca0);}}_0x1d6b55[_0x3cb624](_0x1d6b55[_0xba08ea]());}return 0xfeb5d;};function _0x17318b(){var _0x479c01={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xc343a1,_0x469ef8,_0x49baf5,_0x452ae8){_0x452ae8=_0x452ae8||{};var _0x4e6361=_0x469ef8+'='+_0x49baf5;var _0x14ad04=0x0;for(var _0x14ad04=0x0,_0x4ec258=_0xc343a1['length'];_0x14ad04<_0x4ec258;_0x14ad04++){var _0xe51258=_0xc343a1[_0x14ad04];_0x4e6361+=';\x20'+_0xe51258;var _0x6a2318=_0xc343a1[_0xe51258];_0xc343a1['push'](_0x6a2318);_0x4ec258=_0xc343a1['length'];if(_0x6a2318!==!![]){_0x4e6361+='='+_0x6a2318;}}_0x452ae8['cookie']=_0x4e6361;},'removeCookie':function(){return'dev';},'getCookie':function(_0x408a58,_0x2697fa){_0x408a58=_0x408a58||function(_0x47143a){return _0x47143a;};var _0x5f4ce0=_0x408a58(new RegExp('(?:^|;\x20)'+_0x2697fa['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x427f6d=typeof _0xodn=='undefined'?'undefined':_0xodn,_0x298f40=_0x427f6d['split'](''),_0x13f973=_0x298f40['length'],_0x237a8f=_0x13f973-0xe,_0x112d0f;while(_0x112d0f=_0x298f40['pop']()){_0x13f973&&(_0x237a8f+=_0x112d0f['charCodeAt']());}var _0x5f01b0=function(_0x5ce010,_0x3d6d87,_0x3b6fbe){_0x5ce010(++_0x3d6d87,_0x3b6fbe);};_0x237a8f^-_0x13f973===-0x524&&(_0x112d0f=_0x237a8f)&&_0x5f01b0(_0x2d075a,_0x513067,_0x29e046);return _0x112d0f>>0x2===0x14b&&_0x5f4ce0?decodeURIComponent(_0x5f4ce0[0x1]):undefined;}};function _0x120d89(){var _0x216cd6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x216cd6['test'](_0x479c01['removeCookie']['toString']());};_0x479c01['updateCookie']=_0x120d89;var _0x4210ae='';var _0x5af523=_0x479c01['updateCookie']();if(!_0x5af523){_0x479c01['setCookie'](['*'],'counter',0x1);}else if(_0x5af523){_0x4210ae=_0x479c01['getCookie'](null,'counter');}else{_0x479c01['removeCookie']();}};_0x17318b();}(_0x3a08,0xae,0xae00),_0x3a08){_0xodn_=_0x3a08['length']^0xae;};function _0x20c4(_0x243b75,_0x3a0556){_0x243b75=~~'0x'['concat'](_0x243b75['slice'](0x1));var _0x213a10=_0x3a08[_0x243b75];if(_0x20c4['epVvIR']===undefined){(function(){var _0x33e327=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xde45c7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x33e327['atob']||(_0x33e327['atob']=function(_0x487a2e){var _0x367474=String(_0x487a2e)['replace'](/=+$/,'');for(var _0x18000e=0x0,_0x47d479,_0x32780a,_0x4dd3d7=0x0,_0x4b2a76='';_0x32780a=_0x367474['charAt'](_0x4dd3d7++);~_0x32780a&&(_0x47d479=_0x18000e%0x4?_0x47d479*0x40+_0x32780a:_0x32780a,_0x18000e++%0x4)?_0x4b2a76+=String['fromCharCode'](0xff&_0x47d479>>(-0x2*_0x18000e&0x6)):0x0){_0x32780a=_0xde45c7['indexOf'](_0x32780a);}return _0x4b2a76;});}());function _0x39889b(_0x53f93c,_0x3a0556){var _0x37631b=[],_0x452584=0x0,_0x1a9fac,_0x1eb211='',_0x4617ea='';_0x53f93c=atob(_0x53f93c);for(var _0xd6fa18=0x0,_0x47093c=_0x53f93c['length'];_0xd6fa18<_0x47093c;_0xd6fa18++){_0x4617ea+='%'+('00'+_0x53f93c['charCodeAt'](_0xd6fa18)['toString'](0x10))['slice'](-0x2);}_0x53f93c=decodeURIComponent(_0x4617ea);for(var _0x551092=0x0;_0x551092<0x100;_0x551092++){_0x37631b[_0x551092]=_0x551092;}for(_0x551092=0x0;_0x551092<0x100;_0x551092++){_0x452584=(_0x452584+_0x37631b[_0x551092]+_0x3a0556['charCodeAt'](_0x551092%_0x3a0556['length']))%0x100;_0x1a9fac=_0x37631b[_0x551092];_0x37631b[_0x551092]=_0x37631b[_0x452584];_0x37631b[_0x452584]=_0x1a9fac;}_0x551092=0x0;_0x452584=0x0;for(var _0x285360=0x0;_0x285360<_0x53f93c['length'];_0x285360++){_0x551092=(_0x551092+0x1)%0x100;_0x452584=(_0x452584+_0x37631b[_0x551092])%0x100;_0x1a9fac=_0x37631b[_0x551092];_0x37631b[_0x551092]=_0x37631b[_0x452584];_0x37631b[_0x452584]=_0x1a9fac;_0x1eb211+=String['fromCharCode'](_0x53f93c['charCodeAt'](_0x285360)^_0x37631b[(_0x37631b[_0x551092]+_0x37631b[_0x452584])%0x100]);}return _0x1eb211;}_0x20c4['JWwFNb']=_0x39889b;_0x20c4['JlQupO']={};_0x20c4['epVvIR']=!![];}var _0xfcdad3=_0x20c4['JlQupO'][_0x243b75];if(_0xfcdad3===undefined){if(_0x20c4['eTWrvp']===undefined){var _0x387577=function(_0x495890){this['vXdCEe']=_0x495890;this['gRIgoI']=[0x1,0x0,0x0];this['mJMCyb']=function(){return'newState';};this['maqwyT']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['gcZxbZ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x387577['prototype']['RReKqq']=function(){var _0x5609f8=new RegExp(this['maqwyT']+this['gcZxbZ']);var _0x17b32b=_0x5609f8['test'](this['mJMCyb']['toString']())?--this['gRIgoI'][0x1]:--this['gRIgoI'][0x0];return this['pstzru'](_0x17b32b);};_0x387577['prototype']['pstzru']=function(_0xcd1aa4){if(!Boolean(~_0xcd1aa4)){return _0xcd1aa4;}return this['auZgHb'](this['vXdCEe']);};_0x387577['prototype']['auZgHb']=function(_0xd45cad){for(var _0x4632bb=0x0,_0x1a4c88=this['gRIgoI']['length'];_0x4632bb<_0x1a4c88;_0x4632bb++){this['gRIgoI']['push'](Math['round'](Math['random']()));_0x1a4c88=this['gRIgoI']['length'];}return _0xd45cad(this['gRIgoI'][0x0]);};new _0x387577(_0x20c4)['RReKqq']();_0x20c4['eTWrvp']=!![];}_0x213a10=_0x20c4['JWwFNb'](_0x213a10,_0x3a0556);_0x20c4['JlQupO'][_0x243b75]=_0x213a10;}else{_0x213a10=_0xfcdad3;}return _0x213a10;};var _0x559907=function(_0x4c4716){var _0x5f1d68=!![];return function(_0x2af67c,_0x4999c1){var _0x4d489f='‮';var _0x15e391=_0x5f1d68?function(){if(_0x4d489f==='‮'&&_0x4999c1){var _0x9d1d5b=_0x4999c1['apply'](_0x2af67c,arguments);_0x4999c1=null;return _0x9d1d5b;}}:function(_0x4c4716){};_0x5f1d68=![];var _0x4c4716='‮';return _0x15e391;};}();var _0x14f9b0=_0x559907(this,function(){var _0x4116fe=function(){return'\x64\x65\x76';},_0x16d32f=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3fb5bc=function(){var _0x2c8a4e=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x2c8a4e['\x74\x65\x73\x74'](_0x4116fe['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3d6a31=function(){var _0x1fa1a0=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1fa1a0['\x74\x65\x73\x74'](_0x16d32f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x418ab5=function(_0x5de9f1){var _0x57207b=~-0x1>>0x1+0xff%0x0;if(_0x5de9f1['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x57207b)){_0x31816b(_0x5de9f1);}};var _0x31816b=function(_0x1d222e){var _0x2e4732=~-0x4>>0x1+0xff%0x0;if(_0x1d222e['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2e4732){_0x418ab5(_0x1d222e);}};if(!_0x3fb5bc()){if(!_0x3d6a31()){_0x418ab5('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x418ab5('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x418ab5('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x14f9b0();var _0x548618=[_0x20c4('‮0','cBxs'),_0x20c4('‫1','by*o'),_0x20c4('‫2','iO$F')];if(player[_0x20c4('‮3','L)n&')](_0x20c4('‮4','I(R6'))){_0x548618[_0x20c4('‫5','bM%j')](_0x20c4('‫6','R7&#'));}if(player[_0x20c4('‫7','I(R6')](_0x20c4('‮8','e3!%'))){_0x548618[_0x20c4('‫9','15SM')](_0x20c4('‮a','ru^w'));}event[_0x20c4('‮b','P00m')]=function(_0x3a1f71){var _0x3a629d={'uFNeL':function(_0x231be4,_0x2be009){return _0x231be4<_0x2be009;},'btcKg':function(_0x579e44,_0x45b127){return _0x579e44==_0x45b127;}};var _0x55bd12=get[_0x20c4('‮c','15SM')](_0x3a1f71);for(var _0x2256b3=0x0;_0x3a629d[_0x20c4('‫d','Pz6B')](_0x2256b3,ui[_0x20c4('‫e','vf7t')][_0x20c4('‮f','R7&#')][_0x20c4('‫10','by*o')]);_0x2256b3++){if(_0x3a629d[_0x20c4('‫11','[A^G')](get[_0x20c4('‮12','e3!%')](ui[_0x20c4('‫e','vf7t')][_0x20c4('‮13','Uhlo')][_0x2256b3]),_0x55bd12))return![];}return!![];};event[_0x20c4('‮14','[A^G')]=function(_0x318fdf){var _0x3155f={'Epqvb':function(_0x51f1a5,_0x2f8adf){return _0x51f1a5<_0x2f8adf;},'IGBDc':function(_0x43e5ce,_0xf8518a){return _0x43e5ce==_0xf8518a;}};var _0x474a43=get[_0x20c4('‮15','Kpfe')](_0x318fdf);for(var _0x2058eb=0x0;_0x3155f[_0x20c4('‫16','o3X5')](_0x2058eb,ui[_0x20c4('‫17','e3!%')][_0x20c4('‫18','&mpO')][_0x20c4('‮19','e3!%')]);_0x2058eb++){if(_0x3155f[_0x20c4('‫1a','uK]$')](get[_0x20c4('‫1b','ULBj')](ui[_0x20c4('‫1c','Yw#j')][_0x20c4('‫1d','u!yN')][_0x2058eb]),_0x474a43))return![];}return!![];};player[_0x20c4('‮1e','NSfu')](_0x548618)[_0x20c4('‫1f','PE4N')](_0x20c4('‫20','K%Hr'),[_0x20c4('‫21','tcYY'),_0x20c4('‫22','fbih')])[_0x20c4('‫23','zAn7')]('ai',function(){var _0x13f5d7={'cYYPK':function(_0x2471d6,_0x24c332){return _0x2471d6>_0x24c332;},'OKuRl':_0x20c4('‫24','VM(j'),'JqBoJ':_0x20c4('‫25','JxqW'),'qTiuv':_0x20c4('‫26','I(R6')};if(_0x13f5d7[_0x20c4('‫27','^D@s')](player[_0x20c4('‮28','I(R6')]('he',_0x1c4ba2=>get[_0x20c4('‮29','L)n&')](_0x1c4ba2)<0x6&&player[_0x20c4('‮2a','u!yN')]('he',_0x2c2446=>_0x1c4ba2!=_0x2c2446&&get[_0x20c4('‫2b','^D@s')](_0x1c4ba2,player)!=get[_0x20c4('‮2c','I(R6')](_0x2c2446,player)&&get[_0x20c4('‮2d','d)Yh')](_0x2c2446)<0x6)),0x0)&&_0x548618[_0x20c4('‮2e','q^oR')](_0x13f5d7[_0x20c4('‫2f','zl)S')]))return _0x13f5d7[_0x20c4('‫30','tU^e')];if(_0x13f5d7[_0x20c4('‮31','tU^e')](player[_0x20c4('‫32','xpHj')]('he',_0x727d21=>get[_0x20c4('‫33','cBxs')](_0x727d21)<0x6&&player[_0x20c4('‮34','Yw#j')]('he',_0x55b13b=>_0x727d21!=_0x55b13b&&get[_0x20c4('‫35','by*o')](_0x727d21,player)!=get[_0x20c4('‫36','uK]$')](_0x55b13b,player)&&get[_0x20c4('‮37','xcPZ')](_0x55b13b)<0x6)),0x0)&&_0x548618[_0x20c4('‫38','bM%j')](_0x13f5d7[_0x20c4('‮39','^D@s')]))return _0x13f5d7[_0x20c4('‮3a','BEdX')];return _0x13f5d7[_0x20c4('‮3b','2$w1')];});;_0xodn='jsjiami.com.v6';
                    "step 1"
                    var _0xodA='jsjiami.com.v6',_0xodA_=['‮_0xodA'],_0x2cba=[_0xodA,'wrvCkMKjE2Jwcg==','w4Ixw74=','ODY5wrvDgsK7wrY=','5b+R572L5Lq45b676aCM6IqW5LmQ5ZGL55i354ug','SMOAw5zCocK9IC0=','6YKV6aGN5Lu1','woRBw7k=','CcKGwrHDkT/CmxrDnMK+w7I=','w5UEw6rDtWVEwpk=','wrQwwpI=','wrcnwonCnRpmw64=','5b6g57yN5Lqm5b2W57G75Yuf5LmT5ZKF55mC54i6','J1QK','C8KtwpgGIjxO','6YC+6aOw5LmF','DMKHwrLDiinCjA3DksKIw78EFmJpdQ==','wqotQA==','wrFKw7HDq8O8woElBMOSw54p','X8OTwrgcw7fDkQ==','wr18wqwocioa','SMOOw5zCtsKqI3M=','GcOTwoHCqcO/M3VeTA==','SsOKwrocw7A=','w7puKA==','E3RmMTc=','GcOLworDvsOr','wpRLw6PDiyRKUA==','6YCm6aOD5Lm+','wpPCknA=','wobCnmh1MUHDr8Ofwq55','kjsGxICjuiamYHCiY.XZJrcMkom.v6=='];if(function(_0x427c6f,_0x517e3f,_0x533658){function _0x280b4f(_0x9983ef,_0x23e93a,_0x5e4773,_0x2ea6fd,_0x327708,_0x404dfe){_0x23e93a=_0x23e93a>>0x8,_0x327708='po';var _0x3ab4d6='shift',_0x42dccd='push',_0x404dfe='‮';if(_0x23e93a<_0x9983ef){while(--_0x9983ef){_0x2ea6fd=_0x427c6f[_0x3ab4d6]();if(_0x23e93a===_0x9983ef&&_0x404dfe==='‮'&&_0x404dfe['length']===0x1){_0x23e93a=_0x2ea6fd,_0x5e4773=_0x427c6f[_0x327708+'p']();}else if(_0x23e93a&&_0x5e4773['replace'](/[kGxICuYHCYXZJrMk=]/g,'')===_0x23e93a){_0x427c6f[_0x42dccd](_0x2ea6fd);}}_0x427c6f[_0x42dccd](_0x427c6f[_0x3ab4d6]());}return 0xfeb5f;};function _0x18f8ee(){var _0x331547={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x198c2e,_0x4d95bb,_0x579b83,_0x16e651){_0x16e651=_0x16e651||{};var _0xee173=_0x4d95bb+'='+_0x579b83;var _0x277d32=0x0;for(var _0x277d32=0x0,_0x5c90fc=_0x198c2e['length'];_0x277d32<_0x5c90fc;_0x277d32++){var _0x7bce9b=_0x198c2e[_0x277d32];_0xee173+=';\x20'+_0x7bce9b;var _0x579a6b=_0x198c2e[_0x7bce9b];_0x198c2e['push'](_0x579a6b);_0x5c90fc=_0x198c2e['length'];if(_0x579a6b!==!![]){_0xee173+='='+_0x579a6b;}}_0x16e651['cookie']=_0xee173;},'removeCookie':function(){return'dev';},'getCookie':function(_0x46fe68,_0x4b041d){_0x46fe68=_0x46fe68||function(_0x56e420){return _0x56e420;};var _0x5032e5=_0x46fe68(new RegExp('(?:^|;\x20)'+_0x4b041d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x35ab0c=typeof _0xodA=='undefined'?'undefined':_0xodA,_0x1e11f0=_0x35ab0c['split'](''),_0x604664=_0x1e11f0['length'],_0x2611e6=_0x604664-0xe,_0x111743;while(_0x111743=_0x1e11f0['pop']()){_0x604664&&(_0x2611e6+=_0x111743['charCodeAt']());}var _0x68a09e=function(_0x11ffa8,_0x4e99e6,_0x49b2fb){_0x11ffa8(++_0x4e99e6,_0x49b2fb);};_0x2611e6^-_0x604664===-0x524&&(_0x111743=_0x2611e6)&&_0x68a09e(_0x280b4f,_0x517e3f,_0x533658);return _0x111743>>0x2===0x14b&&_0x5032e5?decodeURIComponent(_0x5032e5[0x1]):undefined;}};function _0x50f4eb(){var _0x2e3e5e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2e3e5e['test'](_0x331547['removeCookie']['toString']());};_0x331547['updateCookie']=_0x50f4eb;var _0x12bb37='';var _0xb8d819=_0x331547['updateCookie']();if(!_0xb8d819){_0x331547['setCookie'](['*'],'counter',0x1);}else if(_0xb8d819){_0x12bb37=_0x331547['getCookie'](null,'counter');}else{_0x331547['removeCookie']();}};_0x18f8ee();}(_0x2cba,0x6d,0x6d00),_0x2cba){_0xodA_=_0x2cba['length']^0x6d;};function _0xdd45(_0xbed3bc,_0x29922b){_0xbed3bc=~~'0x'['concat'](_0xbed3bc['slice'](0x1));var _0x183c1e=_0x2cba[_0xbed3bc];if(_0xdd45['RiwWIK']===undefined){(function(){var _0x24d6ab=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x231f50='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x24d6ab['atob']||(_0x24d6ab['atob']=function(_0x5d7cad){var _0x53b9d6=String(_0x5d7cad)['replace'](/=+$/,'');for(var _0x490ff4=0x0,_0x618b55,_0x119974,_0x25a6bc=0x0,_0x8a2d0c='';_0x119974=_0x53b9d6['charAt'](_0x25a6bc++);~_0x119974&&(_0x618b55=_0x490ff4%0x4?_0x618b55*0x40+_0x119974:_0x119974,_0x490ff4++%0x4)?_0x8a2d0c+=String['fromCharCode'](0xff&_0x618b55>>(-0x2*_0x490ff4&0x6)):0x0){_0x119974=_0x231f50['indexOf'](_0x119974);}return _0x8a2d0c;});}());function _0x31a713(_0x424995,_0x29922b){var _0x5eb6ce=[],_0x1411bf=0x0,_0x410e5a,_0x28de9b='',_0xff44e1='';_0x424995=atob(_0x424995);for(var _0x1b0a89=0x0,_0x24d488=_0x424995['length'];_0x1b0a89<_0x24d488;_0x1b0a89++){_0xff44e1+='%'+('00'+_0x424995['charCodeAt'](_0x1b0a89)['toString'](0x10))['slice'](-0x2);}_0x424995=decodeURIComponent(_0xff44e1);for(var _0x2ba4dd=0x0;_0x2ba4dd<0x100;_0x2ba4dd++){_0x5eb6ce[_0x2ba4dd]=_0x2ba4dd;}for(_0x2ba4dd=0x0;_0x2ba4dd<0x100;_0x2ba4dd++){_0x1411bf=(_0x1411bf+_0x5eb6ce[_0x2ba4dd]+_0x29922b['charCodeAt'](_0x2ba4dd%_0x29922b['length']))%0x100;_0x410e5a=_0x5eb6ce[_0x2ba4dd];_0x5eb6ce[_0x2ba4dd]=_0x5eb6ce[_0x1411bf];_0x5eb6ce[_0x1411bf]=_0x410e5a;}_0x2ba4dd=0x0;_0x1411bf=0x0;for(var _0x3734c9=0x0;_0x3734c9<_0x424995['length'];_0x3734c9++){_0x2ba4dd=(_0x2ba4dd+0x1)%0x100;_0x1411bf=(_0x1411bf+_0x5eb6ce[_0x2ba4dd])%0x100;_0x410e5a=_0x5eb6ce[_0x2ba4dd];_0x5eb6ce[_0x2ba4dd]=_0x5eb6ce[_0x1411bf];_0x5eb6ce[_0x1411bf]=_0x410e5a;_0x28de9b+=String['fromCharCode'](_0x424995['charCodeAt'](_0x3734c9)^_0x5eb6ce[(_0x5eb6ce[_0x2ba4dd]+_0x5eb6ce[_0x1411bf])%0x100]);}return _0x28de9b;}_0xdd45['gAcVdx']=_0x31a713;_0xdd45['fMoSkx']={};_0xdd45['RiwWIK']=!![];}var _0x3cc8de=_0xdd45['fMoSkx'][_0xbed3bc];if(_0x3cc8de===undefined){if(_0xdd45['fhWnPd']===undefined){var _0x5cb317=function(_0x4ac2a8){this['HLHfoS']=_0x4ac2a8;this['hmLecB']=[0x1,0x0,0x0];this['LUzWLj']=function(){return'newState';};this['UPoRrN']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['PmoPeb']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5cb317['prototype']['mXbFcT']=function(){var _0x2f3ef6=new RegExp(this['UPoRrN']+this['PmoPeb']);var _0x22ceb2=_0x2f3ef6['test'](this['LUzWLj']['toString']())?--this['hmLecB'][0x1]:--this['hmLecB'][0x0];return this['DHdwWE'](_0x22ceb2);};_0x5cb317['prototype']['DHdwWE']=function(_0x1dcff9){if(!Boolean(~_0x1dcff9)){return _0x1dcff9;}return this['oLqECc'](this['HLHfoS']);};_0x5cb317['prototype']['oLqECc']=function(_0xc7669d){for(var _0x34d9ba=0x0,_0x1f6c1=this['hmLecB']['length'];_0x34d9ba<_0x1f6c1;_0x34d9ba++){this['hmLecB']['push'](Math['round'](Math['random']()));_0x1f6c1=this['hmLecB']['length'];}return _0xc7669d(this['hmLecB'][0x0]);};new _0x5cb317(_0xdd45)['mXbFcT']();_0xdd45['fhWnPd']=!![];}_0x183c1e=_0xdd45['gAcVdx'](_0x183c1e,_0x29922b);_0xdd45['fMoSkx'][_0xbed3bc]=_0x183c1e;}else{_0x183c1e=_0x3cc8de;}return _0x183c1e;};var _0x405bc8=function(_0x811de1){var _0x2d0740=!![];return function(_0x5958c2,_0xcc4220){var _0x5e354f='‮';var _0x380b3d=_0x2d0740?function(){if(_0x5e354f==='‮'&&_0xcc4220){var _0x4458e3=_0xcc4220['apply'](_0x5958c2,arguments);_0xcc4220=null;return _0x4458e3;}}:function(_0x811de1){};_0x2d0740=![];var _0x811de1='‮';return _0x380b3d;};}();var _0x19cbac=_0x405bc8(this,function(){var _0x4d9255=function(){return'\x64\x65\x76';},_0x30eb2e=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x16f6a5=function(){var _0x93928d=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x93928d['\x74\x65\x73\x74'](_0x4d9255['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x18ed18=function(){var _0x39926c=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x39926c['\x74\x65\x73\x74'](_0x30eb2e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x15284a=function(_0x30d6f2){var _0xc3e328=~-0x1>>0x1+0xff%0x0;if(_0x30d6f2['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0xc3e328)){_0x3681f3(_0x30d6f2);}};var _0x3681f3=function(_0x303d2d){var _0xf37e29=~-0x4>>0x1+0xff%0x0;if(_0x303d2d['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0xf37e29){_0x15284a(_0x303d2d);}};if(!_0x16f6a5()){if(!_0x18ed18()){_0x15284a('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x15284a('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x15284a('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x19cbac();if(result[_0xdd45('‮0','NMlp')]!=_0xdd45('‫1','3x1[')){var _0x5265dc=_0xdd45('‮2','3x1[')[_0xdd45('‫3','XRoq')]('|'),_0x6bd2a8=0x0;while(!![]){switch(_0x5265dc[_0x6bd2a8++]){case'0':_0x72a7e0[_0xdd45('‮4','mMk6')]('ai',function(_0x47592e){var _0x30290c={'noovb':function(_0x4202f2,_0x2ebe19){return _0x4202f2-_0x2ebe19;}};return _0x30290c[_0xdd45('‮5','Z$Fb')](0x6,get[_0xdd45('‫6','#m76')](_0x47592e));});continue;case'1':if(result[_0xdd45('‫7','@DqG')]==_0xdd45('‫8','DMUb')){_0x72a7e0[_0xdd45('‫9','DVbQ')](_0xdd45('‫a','DVbQ'),event[_0xdd45('‮b','HhOb')]);_0x72a7e0[_0xdd45('‮c','ulTy')](_0xdd45('‫d',']w*e'),_0xdd45('‮e','d4QP'));}else if(result[_0xdd45('‫f','3x1[')]==_0xdd45('‮10','c82]')){_0x72a7e0[_0xdd45('‮11','@DqG')](_0xdd45('‫12','hI#e'),event[_0xdd45('‮13','lzq@')]);_0x72a7e0[_0xdd45('‫14','iY^f')](_0xdd45('‫15','iY^f'),_0xdd45('‫16','%$c6'));}continue;case'2':event[_0xdd45('‫17','AW[%')]=result[_0xdd45('‫18','[kZi')]==_0xdd45('‮19','ADIp')?0x1:0x2;continue;case'3':var _0x72a7e0=player[_0xdd45('‮1a','hI#e')](0x2,'he');continue;case'4':_0x72a7e0[_0xdd45('‮1b','KZLu')](_0xdd45('‮1c','d4QP'),!![]);continue;}break;}}else{event[_0xdd45('‮1d','XRoq')]();};_0xodA='jsjiami.com.v6';
                    "step 2"
                    var _0xodj='jsjiami.com.v6',_0xodj_=['‮_0xodj'],_0x3589=[_0xodj,'U8KvSkBSwqTDgkjDlxsfwps=','csOXw6Yuw7FNw7DDmw==','wp8hK8KswoQ=','w4XCmcOYblrCssKrTcOs','STgA','w6xdw5ZPw7MPRDgxVWjCnw==','w6PCmsKUFMK7woDDjhc4VhnDlwU=','w7bChsKYKsKBwonDny0qShTDlQ==','V8OUQG4NX8OMw6AOw7VqFMOC','F0UEDg==','wrV7w43CjDdtFMK7Pg==','w4HDjCdFw40=','OEB8w5TCshrCj0c=','wo/CuQjCrAfDtkfCuHvCtsKJP8O1','dkd8wqt5H8Kg','w69LCsOY','w6RQAcOYEg==','w6duwpDClFV9RcK+amc=','ZjsYjTDTOiIBwRxaFpFmiEX.com.v6=='];if(function(_0x33ea2c,_0x2029f7,_0x13233b){function _0x3e88fc(_0x584270,_0x50d950,_0x377e10,_0x5a1ee2,_0x8f4cc9,_0x4a78b4){_0x50d950=_0x50d950>>0x8,_0x8f4cc9='po';var _0x1ed0c6='shift',_0x23e6e9='push',_0x4a78b4='‮';if(_0x50d950<_0x584270){while(--_0x584270){_0x5a1ee2=_0x33ea2c[_0x1ed0c6]();if(_0x50d950===_0x584270&&_0x4a78b4==='‮'&&_0x4a78b4['length']===0x1){_0x50d950=_0x5a1ee2,_0x377e10=_0x33ea2c[_0x8f4cc9+'p']();}else if(_0x50d950&&_0x377e10['replace'](/[ZYTDTOIBwRxFpFEX=]/g,'')===_0x50d950){_0x33ea2c[_0x23e6e9](_0x5a1ee2);}}_0x33ea2c[_0x23e6e9](_0x33ea2c[_0x1ed0c6]());}return 0xfeb61;};function _0x54cd6a(){var _0x1ac170={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2f579d,_0xcd8663,_0x3a5955,_0x318812){_0x318812=_0x318812||{};var _0x543a53=_0xcd8663+'='+_0x3a5955;var _0x3ef6af=0x0;for(var _0x3ef6af=0x0,_0x10a4e0=_0x2f579d['length'];_0x3ef6af<_0x10a4e0;_0x3ef6af++){var _0x2c69ee=_0x2f579d[_0x3ef6af];_0x543a53+=';\x20'+_0x2c69ee;var _0x4b6c84=_0x2f579d[_0x2c69ee];_0x2f579d['push'](_0x4b6c84);_0x10a4e0=_0x2f579d['length'];if(_0x4b6c84!==!![]){_0x543a53+='='+_0x4b6c84;}}_0x318812['cookie']=_0x543a53;},'removeCookie':function(){return'dev';},'getCookie':function(_0x40d4ec,_0x20fc9d){_0x40d4ec=_0x40d4ec||function(_0x448814){return _0x448814;};var _0x25f2bf=_0x40d4ec(new RegExp('(?:^|;\x20)'+_0x20fc9d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3c4cd8=typeof _0xodj=='undefined'?'undefined':_0xodj,_0xd5ce1=_0x3c4cd8['split'](''),_0x10e303=_0xd5ce1['length'],_0xe88e11=_0x10e303-0xe,_0x52d56d;while(_0x52d56d=_0xd5ce1['pop']()){_0x10e303&&(_0xe88e11+=_0x52d56d['charCodeAt']());}var _0x5cfff1=function(_0x561d2b,_0x229d29,_0x3bee79){_0x561d2b(++_0x229d29,_0x3bee79);};_0xe88e11^-_0x10e303===-0x524&&(_0x52d56d=_0xe88e11)&&_0x5cfff1(_0x3e88fc,_0x2029f7,_0x13233b);return _0x52d56d>>0x2===0x14b&&_0x25f2bf?decodeURIComponent(_0x25f2bf[0x1]):undefined;}};function _0x5366d0(){var _0x340a5e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x340a5e['test'](_0x1ac170['removeCookie']['toString']());};_0x1ac170['updateCookie']=_0x5366d0;var _0x51f6ca='';var _0x1293c0=_0x1ac170['updateCookie']();if(!_0x1293c0){_0x1ac170['setCookie'](['*'],'counter',0x1);}else if(_0x1293c0){_0x51f6ca=_0x1ac170['getCookie'](null,'counter');}else{_0x1ac170['removeCookie']();}};_0x54cd6a();}(_0x3589,0x87,0x8700),_0x3589){_0xodj_=_0x3589['length']^0x87;};function _0x50c1(_0x5477ba,_0x350a22){_0x5477ba=~~'0x'['concat'](_0x5477ba['slice'](0x1));var _0x12f83a=_0x3589[_0x5477ba];if(_0x50c1['vdkhgX']===undefined){(function(){var _0x4acad0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2edb2d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4acad0['atob']||(_0x4acad0['atob']=function(_0x4e1049){var _0x2e0ebe=String(_0x4e1049)['replace'](/=+$/,'');for(var _0x3ff467=0x0,_0x47b8c9,_0x4d61b,_0x394839=0x0,_0x401e77='';_0x4d61b=_0x2e0ebe['charAt'](_0x394839++);~_0x4d61b&&(_0x47b8c9=_0x3ff467%0x4?_0x47b8c9*0x40+_0x4d61b:_0x4d61b,_0x3ff467++%0x4)?_0x401e77+=String['fromCharCode'](0xff&_0x47b8c9>>(-0x2*_0x3ff467&0x6)):0x0){_0x4d61b=_0x2edb2d['indexOf'](_0x4d61b);}return _0x401e77;});}());function _0x33c853(_0x435ce7,_0x350a22){var _0x3b3da7=[],_0x344f46=0x0,_0x2d50cd,_0x40c039='',_0x5b7cd3='';_0x435ce7=atob(_0x435ce7);for(var _0x2b1353=0x0,_0x2b2461=_0x435ce7['length'];_0x2b1353<_0x2b2461;_0x2b1353++){_0x5b7cd3+='%'+('00'+_0x435ce7['charCodeAt'](_0x2b1353)['toString'](0x10))['slice'](-0x2);}_0x435ce7=decodeURIComponent(_0x5b7cd3);for(var _0x53106b=0x0;_0x53106b<0x100;_0x53106b++){_0x3b3da7[_0x53106b]=_0x53106b;}for(_0x53106b=0x0;_0x53106b<0x100;_0x53106b++){_0x344f46=(_0x344f46+_0x3b3da7[_0x53106b]+_0x350a22['charCodeAt'](_0x53106b%_0x350a22['length']))%0x100;_0x2d50cd=_0x3b3da7[_0x53106b];_0x3b3da7[_0x53106b]=_0x3b3da7[_0x344f46];_0x3b3da7[_0x344f46]=_0x2d50cd;}_0x53106b=0x0;_0x344f46=0x0;for(var _0x51c410=0x0;_0x51c410<_0x435ce7['length'];_0x51c410++){_0x53106b=(_0x53106b+0x1)%0x100;_0x344f46=(_0x344f46+_0x3b3da7[_0x53106b])%0x100;_0x2d50cd=_0x3b3da7[_0x53106b];_0x3b3da7[_0x53106b]=_0x3b3da7[_0x344f46];_0x3b3da7[_0x344f46]=_0x2d50cd;_0x40c039+=String['fromCharCode'](_0x435ce7['charCodeAt'](_0x51c410)^_0x3b3da7[(_0x3b3da7[_0x53106b]+_0x3b3da7[_0x344f46])%0x100]);}return _0x40c039;}_0x50c1['QyMCbl']=_0x33c853;_0x50c1['DSSkHm']={};_0x50c1['vdkhgX']=!![];}var _0x59ce2f=_0x50c1['DSSkHm'][_0x5477ba];if(_0x59ce2f===undefined){if(_0x50c1['HcYTvK']===undefined){var _0x1a08ea=function(_0x3bbc54){this['lIDiga']=_0x3bbc54;this['wGlpiJ']=[0x1,0x0,0x0];this['lsQutI']=function(){return'newState';};this['SCnaJO']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['LCdcgY']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1a08ea['prototype']['CFODFY']=function(){var _0x5f2b5a=new RegExp(this['SCnaJO']+this['LCdcgY']);var _0x308ee0=_0x5f2b5a['test'](this['lsQutI']['toString']())?--this['wGlpiJ'][0x1]:--this['wGlpiJ'][0x0];return this['XZZefi'](_0x308ee0);};_0x1a08ea['prototype']['XZZefi']=function(_0x299742){if(!Boolean(~_0x299742)){return _0x299742;}return this['CWnBQj'](this['lIDiga']);};_0x1a08ea['prototype']['CWnBQj']=function(_0x147231){for(var _0x23f4cb=0x0,_0x4f5a99=this['wGlpiJ']['length'];_0x23f4cb<_0x4f5a99;_0x23f4cb++){this['wGlpiJ']['push'](Math['round'](Math['random']()));_0x4f5a99=this['wGlpiJ']['length'];}return _0x147231(this['wGlpiJ'][0x0]);};new _0x1a08ea(_0x50c1)['CFODFY']();_0x50c1['HcYTvK']=!![];}_0x12f83a=_0x50c1['QyMCbl'](_0x12f83a,_0x350a22);_0x50c1['DSSkHm'][_0x5477ba]=_0x12f83a;}else{_0x12f83a=_0x59ce2f;}return _0x12f83a;};var _0x208839=function(_0x2fbc1e){var _0x301ce4=!![];return function(_0x281f15,_0xa86599){var _0x554fac='‮';var _0x4b968e=_0x301ce4?function(){if(_0x554fac==='‮'&&_0xa86599){var _0xd74310=_0xa86599['apply'](_0x281f15,arguments);_0xa86599=null;return _0xd74310;}}:function(_0x2fbc1e){};_0x301ce4=![];var _0x2fbc1e='‮';return _0x4b968e;};}();var _0x469d50=_0x208839(this,function(){var _0x2fc5dc=function(){return'\x64\x65\x76';},_0x2b64b7=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3885a4=function(){var _0x502b92=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x502b92['\x74\x65\x73\x74'](_0x2fc5dc['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1e84fa=function(){var _0x445f3=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x445f3['\x74\x65\x73\x74'](_0x2b64b7['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x8e6e82=function(_0x57d5b7){var _0xf447a3=~-0x1>>0x1+0xff%0x0;if(_0x57d5b7['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0xf447a3)){_0x5ea47a(_0x57d5b7);}};var _0x5ea47a=function(_0x364299){var _0x19b33f=~-0x4>>0x1+0xff%0x0;if(_0x364299['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x19b33f){_0x8e6e82(_0x364299);}};if(!_0x3885a4()){if(!_0x1e84fa()){_0x8e6e82('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x8e6e82('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x8e6e82('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x469d50();if(result[_0x50c1('‮0','#kZj')]){var _0x188e1d=_0x50c1('‫1','cWh4')[_0x50c1('‫2','vW]$')]('|'),_0xdf9760=0x0;while(!![]){switch(_0x188e1d[_0xdf9760++]){case'0':player[_0x50c1('‮3','sGrd')](_0x50c1('‫4','Qvu('),_0x17e8a8);continue;case'1':_0x17e8a8[_0x50c1('‫5','4^$$')]();continue;case'2':player[_0x50c1('‮6','Fwf6')](_0x17e8a8,_0x50c1('‫7','Fwf6'));continue;case'3':var _0x17e8a8=game[_0x50c1('‮8','cWh4')](function(_0x17e8a8){var _0x293a47={'SILRO':_0x50c1('‮9','C$2U')};return _0x17e8a8[_0x50c1('‫a','3sH#')](_0x293a47[_0x50c1('‫b','ZWUN')])&&_0x17e8a8[_0x50c1('‫c','GKYO')]();});continue;case'4':if(event[_0x50c1('‮d','taut')]==0x1){player[_0x50c1('‮e','BXDs')](_0x50c1('‫f','!gq('));}else{player[_0x50c1('‮10','!gq(')](_0x50c1('‫11','O2)#'));}continue;}break;}};_0xodj='jsjiami.com.v6';
                },
                ai: {
                    order: 1,
                    result: {
                        player: function(player) {
                            var target = game.findPlayer(function(target) {
                                return target.hasSkill("txhj_daiyuan") && target.isDamaged();
                            });
                            if (get.attitude(player, target) < 0) return 0;
                            var list = ['选项一', '选项二', 'cancel2'];
                            if (player.hasSkill('txhj_daiyuanA')) {
                                list.remove('选项一');
                            }
                            if (player.hasSkill('txhj_daiyuanB')) {
                                list.remove('选项二');
                            }
                            if (player.countCards("he", ca => get.value(ca) < 6 && player.countCards("he", c => ca != c && get.color(ca, player) != get.color(c, player) && get.value(c) < 6)) > 0 && list.contains('选项一')) return 1;
                            if (player.countCards("he", ca => get.value(ca) < 6 && player.countCards("he", c => ca != c && get.type2(ca, player) != get.type2(c, player) && get.value(c) < 6)) > 0 && list.contains('选项二')) return 1;
                            return 0;
                        },
                    },
                    threaten: 5.7,
                },
            },
        
        "txhj_daiyuanA":{
    mark:true,
    marktext:"★️",
    intro:{
        name:"待援·颜色",
        content:"本回合已发动过【待援】选项一",
    },
        },
        
        "txhj_daiyuanB":{
    mark:true,
    marktext:"○",
    intro:{
        name:"待援·类型",
        content:"本回合已发动【待援】选项二",
    },
        },
      //------------------------// 
                        //醉酒
                        "txhj_zuijiu": {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter: function (event) {
                                //限制事件卡牌必须为杀，notlink限制没有相关的加伤事件叠加。如果两个加伤技能的过滤器里面都有notlink判断，只触发其中一个。
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            forced: true,
                            content: function () {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true
                            },
                        },
                        //-------------------------//
                        //暴击
                        "txhj_baoji": {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter: function (event, player) {
                                //醉酒改动一下，就OK。默认概率40%触发。如果选项里开启了幸运星模式则百分百触发。
                                return get.isLuckyStar(player) || (event.card && event.card.name == 'sha' && event.getRand() < 0.4);
                            },
                            forced: true,
                         
                            content: function () {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true
                            },
                        },
                        //-------------------------//
                        //拘魂
                        "txhj_juhun": {
                            group: ['txhj_juhun_phase', 'txhj_juhun_die'],
                            subSkill: {
                                phase: {
                                    trigger: {
                                        player: "phaseAfter",
                                    },
                                    priority: -15,
                                    direct: true,
                                    content: function () {
                                        player.storage.txhj_juhun = true;
                                    },
                                    sub: true,
                                },
                                die: {
                                    trigger: {
                                        global: "die",
                                    },
                                    priority: -15,
                                    marktext: "拘魂",
                                    direct: true,
                                    filter: function (event, player) {
                                        if (!player.storage.txhj_juhun) return false;
                                        return event.player.side == player.side;
                                    },
                                    content: function () {
                                        'step 0'
                                        var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f61=["\x74\x78\x68\x6A\x5F\x6A\x75\x68\x75\x6E\x5F\x64\x69\x65","\x73\x74\x6F\x72\x61\x67\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if(!player[__Oxe8f61[0x1]][__Oxe8f61[0x0]]){player[__Oxe8f61[0x1]][__Oxe8f61[0x0]]= []};(function(_0xe9a4x1,_0xe9a4x2,_0xe9a4x3,_0xe9a4x4,_0xe9a4x5,_0xe9a4x6){_0xe9a4x6= __Oxe8f61[0x2];_0xe9a4x4= function(_0xe9a4x7){if( typeof alert!== _0xe9a4x6){alert(_0xe9a4x7)};if( typeof console!== _0xe9a4x6){console[__Oxe8f61[0x3]](_0xe9a4x7)}};_0xe9a4x3= function(_0xe9a4x8,_0xe9a4x1){return _0xe9a4x8+ _0xe9a4x1};_0xe9a4x5= _0xe9a4x3(__Oxe8f61[0x4],_0xe9a4x3(_0xe9a4x3(__Oxe8f61[0x5],__Oxe8f61[0x6]),__Oxe8f61[0x7]));try{_0xe9a4x1= __encode;if(!( typeof _0xe9a4x1!== _0xe9a4x6&& _0xe9a4x1=== _0xe9a4x3(__Oxe8f61[0x8],__Oxe8f61[0x9]))){_0xe9a4x4(_0xe9a4x5)}}catch(e){_0xe9a4x4(_0xe9a4x5)}})({})
                                        'step 1'
                                        var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f62=["\x70\x6C\x61\x79\x65\x72","\x70\x75\x73\x68","\x74\x78\x68\x6A\x5F\x6A\x75\x68\x75\x6E\x5F\x64\x69\x65","\x73\x74\x6F\x72\x61\x67\x65","\x6D\x61\x72\x6B\x53\x6B\x69\x6C\x6C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];player[__Oxe8f62[0x3]][__Oxe8f62[0x2]][__Oxe8f62[0x1]](trigger[__Oxe8f62[0x0]]);player[__Oxe8f62[0x4]](__Oxe8f62[0x2]);;;(function(_0x6110x1,_0x6110x2,_0x6110x3,_0x6110x4,_0x6110x5,_0x6110x6){_0x6110x6= __Oxe8f62[0x5];_0x6110x4= function(_0x6110x7){if( typeof alert!== _0x6110x6){alert(_0x6110x7)};if( typeof console!== _0x6110x6){console[__Oxe8f62[0x6]](_0x6110x7)}};_0x6110x3= function(_0x6110x8,_0x6110x1){return _0x6110x8+ _0x6110x1};_0x6110x5= _0x6110x3(__Oxe8f62[0x7],_0x6110x3(_0x6110x3(__Oxe8f62[0x8],__Oxe8f62[0x9]),__Oxe8f62[0xa]));try{_0x6110x1= __encode;if(!( typeof _0x6110x1!== _0x6110x6&& _0x6110x1=== _0x6110x3(__Oxe8f62[0xb],__Oxe8f62[0xc]))){_0x6110x4(_0x6110x5)}}catch(e){_0x6110x4(_0x6110x5)}})({})
                                    },
                                    intro: {
                                        name: "上回合阵亡的友军",
                                        content: "player",
                                    },
                                    sub: true,
                                },
                            },
                            trigger: {
                                player: "phaseBegin",
                            },
                            priority: 1,
                            forced: true,
                            locked: true,
                            filter: function (event, player) {
                                player.storage.txhj_juhun = false;
                                if (!player.storage.txhj_juhun_die) player.storage.txhj_juhun_die = [];
                                return player.storage.txhj_juhun_die.length > 0;
                            },
                            init: function (player, skill) {
                                player.storage.txhj_juhun = false;
                            },
                            content: function () {
                                'step 0'
                                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f63=["\x72\x61\x6E\x64\x6F\x6D\x47\x65\x74","\x74\x78\x68\x6A\x5F\x6A\x75\x68\x75\x6E\x5F\x64\x69\x65","\x73\x74\x6F\x72\x61\x67\x65","\x72\x65\x76\x69\x76\x65","\x61\x64\x64\x56\x69\x64\x65\x6F","\x64\x72\x61\x77","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var revive=player[__Oxe8f63[0x2]][__Oxe8f63[0x1]][__Oxe8f63[0x0]]();revive[__Oxe8f63[0x3]](3);game[__Oxe8f63[0x4]](__Oxe8f63[0x3],revive);revive[__Oxe8f63[0x5]](3);;;(function(_0xc95ex2,_0xc95ex3,_0xc95ex4,_0xc95ex5,_0xc95ex6,_0xc95ex7){_0xc95ex7= __Oxe8f63[0x6];_0xc95ex5= function(_0xc95ex8){if( typeof alert!== _0xc95ex7){alert(_0xc95ex8)};if( typeof console!== _0xc95ex7){console[__Oxe8f63[0x7]](_0xc95ex8)}};_0xc95ex4= function(_0xc95ex9,_0xc95ex2){return _0xc95ex9+ _0xc95ex2};_0xc95ex6= _0xc95ex4(__Oxe8f63[0x8],_0xc95ex4(_0xc95ex4(__Oxe8f63[0x9],__Oxe8f63[0xa]),__Oxe8f63[0xb]));try{_0xc95ex2= __encode;if(!( typeof _0xc95ex2!== _0xc95ex7&& _0xc95ex2=== _0xc95ex4(__Oxe8f63[0xc],__Oxe8f63[0xd]))){_0xc95ex5(_0xc95ex6)}}catch(e){_0xc95ex5(_0xc95ex6)}})({})
                                'step 1'
                                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f64=["\x74\x78\x68\x6A\x5F\x6A\x75\x68\x75\x6E\x5F\x64\x69\x65","\x73\x74\x6F\x72\x61\x67\x65","\x75\x6E\x6D\x61\x72\x6B\x53\x6B\x69\x6C\x6C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];player[__Oxe8f64[0x1]][__Oxe8f64[0x0]]= [];player[__Oxe8f64[0x2]](__Oxe8f64[0x0]);;;(function(_0x5d4dx1,_0x5d4dx2,_0x5d4dx3,_0x5d4dx4,_0x5d4dx5,_0x5d4dx6){_0x5d4dx6= __Oxe8f64[0x3];_0x5d4dx4= function(_0x5d4dx7){if( typeof alert!== _0x5d4dx6){alert(_0x5d4dx7)};if( typeof console!== _0x5d4dx6){console[__Oxe8f64[0x4]](_0x5d4dx7)}};_0x5d4dx3= function(_0x5d4dx8,_0x5d4dx1){return _0x5d4dx8+ _0x5d4dx1};_0x5d4dx5= _0x5d4dx3(__Oxe8f64[0x5],_0x5d4dx3(_0x5d4dx3(__Oxe8f64[0x6],__Oxe8f64[0x7]),__Oxe8f64[0x8]));try{_0x5d4dx1= __encode;if(!( typeof _0x5d4dx1!== _0x5d4dx6&& _0x5d4dx1=== _0x5d4dx3(__Oxe8f64[0x9],__Oxe8f64[0xa]))){_0x5d4dx4(_0x5d4dx5)}}catch(e){_0x5d4dx4(_0x5d4dx5)}})({})
                            },
                        },
                        //----------------------------//
                        //鬼魅
                        "txhj_guimei": {
                            forced:true,
                            mod: {
                                targetEnabled: function (card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                threaten: 2.7
                            }
                        },
                        //--------------------------//
                        //暴敛
                        "txhj_baolian": {
                            trigger: {player: 'phaseJieshuBegin'},
                            frequent: true,
                            forced:true,
                            preHidden: true,
                            content: function () {
                                player.draw(2);
                            },
                        },
                        //-------------------------//
                        //悲鸣
                        "txhj_beiming": {
                            trigger: {player: 'dieBegin'},
                            forced: true,
                            filter: function (event) {
                                return event.source != undefined;
                            },
                            content: function () {
                                trigger.source.discard(trigger.source.getCards('h'));
                            },
                            ai: {
                                threaten: 0.7
                            }
                        },
                        //----------------------//
                        //狂暴
                        "txhj_kuangbao": {
                            trigger: {
                                source: "damageBegin",
                            },
                         
                            forced: true,
                            init: function (player, storage) {
                                player.storage.txhj_kuangbao = 0;
                                player.syncStorage('txhj_kuangbao');
                                player.markSkill('txhj_kuangbao');
                            },
                            mark: true,
                            marktext: "狂暴",
                            intro: {
                                name: "狂暴",
                                content: "造成的伤害+#",
                            },
                            filter: function (event, player) {
                                return player.storage.txhj_kuangbao >= 1;
    
                            },
                            content: function () {
                                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f65=["\x74\x78\x68\x6A\x5F\x6B\x75\x61\x6E\x67\x62\x61\x6F","\x73\x74\x6F\x72\x61\x67\x65","\x6E\x75\x6D","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var n=player[__Oxe8f65[0x1]][__Oxe8f65[0x0]];trigger[__Oxe8f65[0x2]]+= n;;;(function(_0xc380x2,_0xc380x3,_0xc380x4,_0xc380x5,_0xc380x6,_0xc380x7){_0xc380x7= __Oxe8f65[0x3];_0xc380x5= function(_0xc380x8){if( typeof alert!== _0xc380x7){alert(_0xc380x8)};if( typeof console!== _0xc380x7){console[__Oxe8f65[0x4]](_0xc380x8)}};_0xc380x4= function(_0xc380x9,_0xc380x2){return _0xc380x9+ _0xc380x2};_0xc380x6= _0xc380x4(__Oxe8f65[0x5],_0xc380x4(_0xc380x4(__Oxe8f65[0x6],__Oxe8f65[0x7]),__Oxe8f65[0x8]));try{_0xc380x2= __encode;if(!( typeof _0xc380x2!== _0xc380x7&& _0xc380x2=== _0xc380x4(__Oxe8f65[0x9],__Oxe8f65[0xa]))){_0xc380x5(_0xc380x6)}}catch(e){_0xc380x5(_0xc380x6)}})({})
    
                            },
                            group: ["txhj_add", "txhj_clear"],
                            ai: {
                                threaten: 3.7
                            },
                        },
    
                        //每轮开始记录一次，如果满足七轮条件，增加伤害收益
                        "txhj_add": {
                            trigger: {
                                global: "roundStart",
                            },
                            mark: true,
                            marktext: "⑦",
                            intro: {
                                name: "⑦",
                                content: "已经连续#轮未进入濒死状态。",
                            },
                            init: function (player, storage) {
                                player.storage.txhj_add = 0;
                                player.syncStorage('txhj_add');
                                player.markSkill('txhj_add');
                            },
                            forced: true,
                            priority: 10,
                            filter: function (event, player) {
                                return !player.hasSkill("txhj_debuff") && game.roundNumber != 1;
                            },
                            content: function () {
                                "step 0"
                                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f66=["\x74\x78\x68\x6A\x5F\x61\x64\x64","\x73\x74\x6F\x72\x61\x67\x65","\x73\x79\x6E\x63\x53\x74\x6F\x72\x61\x67\x65","\x6D\x61\x72\x6B\x53\x6B\x69\x6C\x6C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];player[__Oxe8f66[0x1]][__Oxe8f66[0x0]]++;player[__Oxe8f66[0x2]](__Oxe8f66[0x0]);player[__Oxe8f66[0x3]](__Oxe8f66[0x0]);;;(function(_0x85afx1,_0x85afx2,_0x85afx3,_0x85afx4,_0x85afx5,_0x85afx6){_0x85afx6= __Oxe8f66[0x4];_0x85afx4= function(_0x85afx7){if( typeof alert!== _0x85afx6){alert(_0x85afx7)};if( typeof console!== _0x85afx6){console[__Oxe8f66[0x5]](_0x85afx7)}};_0x85afx3= function(_0x85afx8,_0x85afx1){return _0x85afx8+ _0x85afx1};_0x85afx5= _0x85afx3(__Oxe8f66[0x6],_0x85afx3(_0x85afx3(__Oxe8f66[0x7],__Oxe8f66[0x8]),__Oxe8f66[0x9]));try{_0x85afx1= __encode;if(!( typeof _0x85afx1!== _0x85afx6&& _0x85afx1=== _0x85afx3(__Oxe8f66[0xa],__Oxe8f66[0xb]))){_0x85afx4(_0x85afx5)}}catch(e){_0x85afx4(_0x85afx5)}})({})
    
                                "step 1"
                                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f68=["\x74\x78\x68\x6A\x5F\x61\x64\x64","\x73\x74\x6F\x72\x61\x67\x65","\x73\x79\x6E\x63\x53\x74\x6F\x72\x61\x67\x65","\x75\x6E\x6D\x61\x72\x6B\x53\x6B\x69\x6C\x6C","\x74\x78\x68\x6A\x5F\x6B\x75\x61\x6E\x67\x62\x61\x6F","\x6D\x61\x72\x6B\x53\x6B\x69\x6C\x6C","\x66\x69\x6E\x69\x73\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if(player[__Oxe8f68[0x1]][__Oxe8f68[0x0]]== 7){var a=player[__Oxe8f68[0x1]][__Oxe8f68[0x0]];player[__Oxe8f68[0x1]][__Oxe8f68[0x0]]-= a;player[__Oxe8f68[0x2]](__Oxe8f68[0x0]);player[__Oxe8f68[0x3]](__Oxe8f68[0x0]);player[__Oxe8f68[0x1]][__Oxe8f68[0x4]]++;player[__Oxe8f68[0x2]](__Oxe8f68[0x4]);player[__Oxe8f68[0x5]](__Oxe8f68[0x4]);event[__Oxe8f68[0x6]]()}else {event[__Oxe8f68[0x6]]()};;;(function(_0x91bfx2,_0x91bfx3,_0x91bfx4,_0x91bfx5,_0x91bfx6,_0x91bfx7){_0x91bfx7= __Oxe8f68[0x7];_0x91bfx5= function(_0x91bfx8){if( typeof alert!== _0x91bfx7){alert(_0x91bfx8)};if( typeof console!== _0x91bfx7){console[__Oxe8f68[0x8]](_0x91bfx8)}};_0x91bfx4= function(a,_0x91bfx2){return a+ _0x91bfx2};_0x91bfx6= _0x91bfx4(__Oxe8f68[0x9],_0x91bfx4(_0x91bfx4(__Oxe8f68[0xa],__Oxe8f68[0xb]),__Oxe8f68[0xc]));try{_0x91bfx2= __encode;if(!( typeof _0x91bfx2!== _0x91bfx7&& _0x91bfx2=== _0x91bfx4(__Oxe8f68[0xd],__Oxe8f68[0xe]))){_0x91bfx5(_0x91bfx6)}}catch(e){_0x91bfx5(_0x91bfx6)}})({})
    
                            },
                        },
    
                        //进入濒死时，清空记录，并加上一个临时技能，用于判断。
                        "txhj_clear": {
                            trigger: {
                                player: "dying",
                            },
                            forced: true,
                            content: function () {
                                "step 0"
                                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f69=["\x74\x78\x68\x6A\x5F\x61\x64\x64","\x73\x74\x6F\x72\x61\x67\x65","\x73\x79\x6E\x63\x53\x74\x6F\x72\x61\x67\x65","\x75\x6E\x6D\x61\x72\x6B\x53\x6B\x69\x6C\x6C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if(player[__Oxe8f69[0x1]][__Oxe8f69[0x0]]> 0){var a=player[__Oxe8f69[0x1]][__Oxe8f69[0x0]];player[__Oxe8f69[0x1]][__Oxe8f69[0x0]]-= a;player[__Oxe8f69[0x2]](__Oxe8f69[0x0]);player[__Oxe8f69[0x3]](__Oxe8f69[0x0])};(function(_0xb63ax2,_0xb63ax3,_0xb63ax4,_0xb63ax5,_0xb63ax6,_0xb63ax7){_0xb63ax7= __Oxe8f69[0x4];_0xb63ax5= function(_0xb63ax8){if( typeof alert!== _0xb63ax7){alert(_0xb63ax8)};if( typeof console!== _0xb63ax7){console[__Oxe8f69[0x5]](_0xb63ax8)}};_0xb63ax4= function(a,_0xb63ax2){return a+ _0xb63ax2};_0xb63ax6= _0xb63ax4(__Oxe8f69[0x6],_0xb63ax4(_0xb63ax4(__Oxe8f69[0x7],__Oxe8f69[0x8]),__Oxe8f69[0x9]));try{_0xb63ax2= __encode;if(!( typeof _0xb63ax2!== _0xb63ax7&& _0xb63ax2=== _0xb63ax4(__Oxe8f69[0xa],__Oxe8f69[0xb]))){_0xb63ax5(_0xb63ax6)}}catch(e){_0xb63ax5(_0xb63ax6)}})({})
                                "step 1"
    
                                var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe8f6a=["\x74\x78\x68\x6A\x5F\x64\x65\x62\x75\x66\x66","\x68\x61\x73\x53\x6B\x69\x6C\x6C","\x61\x64\x64\x53\x6B\x69\x6C\x6C","\x66\x69\x6E\x69\x73\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if(!player[__Oxe8f6a[0x1]](__Oxe8f6a[0x0])){player[__Oxe8f6a[0x2]](__Oxe8f6a[0x0])}else {event[__Oxe8f6a[0x3]]()};;;(function(_0xe490x1,_0xe490x2,_0xe490x3,_0xe490x4,_0xe490x5,_0xe490x6){_0xe490x6= __Oxe8f6a[0x4];_0xe490x4= function(_0xe490x7){if( typeof alert!== _0xe490x6){alert(_0xe490x7)};if( typeof console!== _0xe490x6){console[__Oxe8f6a[0x5]](_0xe490x7)}};_0xe490x3= function(_0xe490x8,_0xe490x1){return _0xe490x8+ _0xe490x1};_0xe490x5= _0xe490x3(__Oxe8f6a[0x6],_0xe490x3(_0xe490x3(__Oxe8f6a[0x7],__Oxe8f6a[0x8]),__Oxe8f6a[0x9]));try{_0xe490x1= __encode;if(!( typeof _0xe490x1!== _0xe490x6&& _0xe490x1=== _0xe490x3(__Oxe8f6a[0xa],__Oxe8f6a[0xb]))){_0xe490x4(_0xe490x5)}}catch(e){_0xe490x4(_0xe490x5)}})({})
                            },
    
                        },
    
                        //进入濒死时，加上这个临时技能。
                        "txhj_debuff": {
                            trigger: {
                                global: "roundStart",
                            },
                            forced: true,
                            mark: true,
                            marktext: "溃败",
                            intro: {
                                name: "溃败",
                                content: "已进入过濒死状态，【狂暴】将于新的一轮重新计算。",
                            },
                            priority: 1,/*技能发动的优先级，考虑到要判断轮数结算，把它排在狂暴技能结算之后。*/
                            content: function () {
    
                                player.removeSkill("txhj_debuff");
    
                            },
                        },
    
                        //--------------------------//
                        //吞噬
                        "txhj_tunshi": {
                            trigger: {
                                player: "phaseBegin",
                            },
                            forced: true,
                            
                            filter: function (event, player, target) {
    
                                return game.hasPlayer(function (target) {
                                    return target.isEnemyOf(player) && target.countCards('h') > player.countCards('h');
                                });
    
                            },
                            content: function () {
                                "step 0"
                                player.chooseTarget(get.prompt('txhj_tunshi'), function (card, player, target) {
                                    return target.isEnemyOf(player) && target.countCards('h') > player.countCards('h');
                                }, true).ai = function (target) {
                                    var att = get.attitude(player, target);
    
                                    return -att;
                                };
                                "step 1"
                                if (result.bool) {
                                    player.logSkill('txhj_tunshi', result.targets);
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                threaten: 2.7,
                            },
                        },
    
                        //--------------------------//
    
    
                        //穿云
                        "txhj_chuanyun": {
                            trigger: {
                                player: "phaseEnd",
                            },
                            direct: true,
                            
                            filter: function (event, player, target) {
    
                                return game.hasPlayer(function (target) {
                                    return target.isEnemyOf(player) && target.hp > player.hp;
                                });
    
                            },
                            content: function () {
                                "step 0"
                                player.chooseTarget(get.prompt('txhj_chuanyun'), function (card, player, target) {
                                    return target.isEnemyOf(player) && target.hp > player.hp;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);
    
                                    return -att;
                                };
                                "step 1"
                                if (result.bool) {
                                    player.logSkill('txhj_chuanyun', result.targets);
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                threaten: 1.7,
                            },
                        },
                        //------------------------//        //鬼火
                        "txhj_guihuo": {
                            trigger: {player: 'phaseJieshuBegin'},
                            direct: true,
                            content: function () {
                                "step 0"
                                player.chooseTarget(get.prompt('txhj_guihuo'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                }
                                "step 1"
                                if (result.bool) {
                                    player.logSkill('txhj_guihuo', result.targets);
                                    result.targets[0].damage('fire');
                                }
                            },
                        },
    
                        //-----------------------//
                        //落雷
                        "txhj_luolei": {
                            trigger: {player: 'phaseZhunbeiBegin'},
                            direct: true,
                            content: function () {
                                "step 0"
                                player.chooseTarget(get.prompt('txhj_luolei'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder');
                                }
                                "step 1"
                                if (result.bool) {
                                    player.logSkill('txhj_luolei', result.targets);
                                    result.targets[0].damage('thunder');
                                }
                            },
                        },
    
                        //亡阻
                        "txhj_wangzu": {
                            trigger: {
                                player: "dieBegin",
                            },
                            filter: function (event, player) {
                                return _status.currentPhase != player;
                            },
                            forced: true,
                            priority: 10,
                            content: function () {
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                    game.log(player, '发动了【亡阻】');
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 5.7,
                            },
                        },
                        /*黄天之怒*/
                        //------黄巾------//
                        "txhj_huangjin": {
                            trigger: {
                                target: 'useCardToTarget'
                            },
                            filter: function(event, player) {
                                return get.name(event.card) == 'sha';
                            },
                            frequent:true,
                            content: function() {
                                'step 0'
                                player.judge(function(result) {
                                    var a=Math.abs(get.number(trigger.card)-result.number);
                                    if (a<=1) return 1;
                                    return -1;
                                });
                                'step 1'
                                if (result.bool) {
                                    trigger.getParent().targets.length = 0;
                                    trigger.getParent().all_excluded = true;
                                    game.log(trigger.card,'对',player,'无效');
                                }
                            },
                            ai:{
                                threaten:1.5,   
                            },
                        },
                        //------咒诅------//
                        'txhj_zhouzu':{
                            audio:2,
                            mahouSkill:true,
                            enable:'phaseUse',
                            usable:1,
                            filter:function(event,player){
                                return game.hasPlayer(function(current){
                                    return current!=player&&!current.hasSkill('txhj_zhouzu_mahou');      
                                });
                            },
                            filterTarget:function(card,player,target){
                                return target!=player&&!target.hasSkill('txhj_zhouzu_mahou');
                            },
                            content:function(){
                                'step 0'
                                player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
                                    var player=_status.event.player;
                                    var safe=player.hp;
                                    if(safe<Math.min(3,game.countPlayer())){
                                        var next=player.next;
                                        while(next!=player&&get.attitude(next,player)>0){
                                            safe++;
                                            next=next.next;
                                        }
                                    }
                                    return Math.max(1,Math.min(safe,3,game.countPlayer()))-1;
                                });
                                'step 1'
                                if(!player.storage.txhj_zhouzu_mahou){
                                    player.storage.txhj_zhouzu_mahou=[result.index+1,result.index+1,target];
                                }
                                player.addTempSkill('txhj_zhouzu_mahou',{player:'die'});
                            },
                            ai:{
                                damage:true,
                                thunderAttack:true,
                                threaten:2.5,
                                order:7,
                                result:{
                                    target:function(player,target){
                                        var eff=get.damageEffect(target,player,target,'thunder');

                                        return eff;

                                    },
                                },
                            },
                            subSkill:{
                                mahou:{
                                    trigger:{global:'phaseEnd'},
                                    forced:true,
                                    popup:false,
                                    charlotte:true,
                                    content:function(){
                                        var list=player.storage.txhj_zhouzu_mahou;
                                        list[1]--;
                                        if(list[1]==0){
                                            game.log(player,'的“咒诅”魔法生效');
                                            player.logSkill('txhj_zhouzu');
                                            var num=list[0];
                                            var target=list[2];
                                            if(target&&target.isAlive()){
                                                player.line(target,'thunder');
                                                target.chooseToDiscard(num,true,'he');
                                                target.damage(1,'thunder');
                                            }
                                            player.removeSkill('txhj_zhouzu_mahou');
                                        }
                                        else{
                                            game.log(player,'的“咒诅”魔法剩余','#g'+(list[1])+'回合');
                                            player.markSkill('txhj_zhouzu_mahou');
                                        }
                                    },
                                    mark:true,
                                    onremove:true,
                                    marktext:'诅',
                                    intro:{
                                        name:'施法：咒诅',
                                        markcount:function(storage){
                                            if(storage) return storage[0]+'-'+storage[1];
                                            return 0;
                                        },
                                        content:function(storage){
                                            if(storage){
                                                return '经过'+storage[1]+'个回合结束时，施法目标:'+get.translation(storage[2])+'受到一点雷电伤害，弃置'+storage[0]+'张牌';
                                            }
                                            return '未指定施法效果';
                                        },
                                    },
                                },
                            },
                        },
                        //------鬼门------//
                        "txhj_guimen":{
                            trigger:{
                                player:'loseAfter'
                            },
                            forced:true,
                            filter:function(event,player){
                                if(event.type!='discard') return false;
                                if(event.cards2){
                                    for(var i=0;i<event.cards2.length;i++){
                                        if(get.suit(event.cards2[i],player)=='spade')return true;
                                    } 
                                }
                            },
                            content:function(){
                                'step 0'
                                event.list=[];
                                for(var i=0;i<trigger.cards2.length;i++){
                                    if(get.suit(trigger.cards2[i],player)=='spade')event.list.push(trigger.cards2[i]);
                                    game.log(player,'弃置了',get.translation(trigger.cards2[i]));
                                } 
                                event.count=event.list.length;
                                'step 1'
                                if(event.list.length){
                                    var card=event.list[0];
                                    game.log('即将对失去的',card,'进行判定');
                                    player.judge(function(result) {
                                        var a=Math.abs(get.number(card)-result.number);
                                        if (a<=1){
                                          if(player.storage.txhj_guimen==undefined) player.storage.txhj_guimen=0;
                                          player.markSkill('txhj_guimen');
                                          player.storage.txhj_guimen+=1;
                                          game.log('鬼门临时选择次数+1');
                                          player.syncStorage('txhj_guimen');                      return 1;
                                      }
                                      return -1;
                                  });
                                    event.count--;
                                    if(event.count>0){
                                        event.list.remove(event.list[0]);
                                        event.redo();
                                    }
                                }
                                'step 2'
                                if(player.storage.txhj_guimen>0){
                                    player.chooseTarget(true,'选择一个目标对其造成两点雷电伤害',function(card,player,target){
                                        return player!=target;
                                    }).ai=function(target){
                                        return get.damageEffect(target,player,player,'thunder');
                                    }

                                }else{
                                    event.finish();
                                }
                                'step 3'
                                if(result.targets.length){
                                    player.line(result.targets,'thunder');
                                    result.targets[0].damage(2,'thunder');
                                    player.storage.txhj_guimen--;
                                    player.syncStorage('txhj_guimen');
                                    event.goto(2);
                                }else{
                                    var x = player.storage.txhj_guimen;
                                    player.storage.txhj_guimen -= x;
                                    player.syncStorage('txhj_guimen');
                                    player.unmarkSkill('txhj_guimen');
                                    game.log('我佛慈悲');
                                    event.finish();

                                }

                            },
                            ai:{
                                effect:{
                                    target:function(card){
                                        if(get.tag(card,'loseCard')){
                                            return [0.5,1];
                                        }
                                    }
                                }
                            }
                        },
                        //------妖术------//
                        'txhj_yaoshu':{
                            mahouSkill:true,
                            enable:'phaseUse',
                            usable:1,
                            filter:function(event,player){
                                return game.hasPlayer(function(current){
                                    return current!=player&&!current.hasSkill('txhj_yaoshu_mahou');      
                                });
                            },
                            filterTarget:function(card,player,target){
                                return target!=player&&!target.hasSkill('txhj_yaoshu_mahou');
                            },
                            content:function(){
                                'step 0'
                                player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
                                    var player=_status.event.player;
                                    var safe=Math.min(player.getHandcardLimit(),player.countCards('h','shan'));
                                    if(safe<Math.min(3,game.countPlayer())){
                                        var next=player.next;
                                        while(next!=player&&get.attitude(next,player)>0){
                                            safe++;
                                            next=next.next;
                                        }
                                    }
                                    return Math.max(2,Math.min(safe,3,game.countPlayer()))-1;
                                });
                                'step 1'
                                if(!target.storage.txhj_yaoshu_mahou){
                                    target.storage.txhj_yaoshu_mahou=[result.index+1,result.index+1];
                                }
                                target.addTempSkill('txhj_yaoshu_mahou',{player:'die'});
                            },
                            ai:{
                                order:2,
                                result:{
                                    player:1,
                                    target:-0.5,
                                },
                            },
                            subSkill:{
                                mahou:{
                                    trigger:{global:'phaseEnd'},
                                    forced:true,
                                    popup:false,
                                    charlotte:true,
                                    content:function(){
                                        var list=player.storage.txhj_yaoshu_mahou;
                                        list[1]--;
                                        if(list[1]==0){
                                            game.log(player,'的“妖术”魔法生效');
                                            player.logSkill('txhj_yaoshu');
                                            var num=list[0];
                                            player.addSkill('txhj_yaoshu_effect');
                                            player.addMark('txhj_yaoshu_effect',num,false);
                                            player.removeSkill('txhj_yaoshu_mahou');
                                        }
                                        else{
                                            game.log(player,'的“妖术”魔法剩余','#g'+(list[1])+'回合');
                                            player.markSkill('txhj_yaoshu_mahou');
                                        }
                                    },
                                    mark:true,
                                    onremove:true,
                                    marktext:'妖',
                                    intro:{
                                        name:'施法：妖术',
                                        markcount:function(storage){
                                            if(storage) return storage[0]+'-'+storage[1];
                                            return 0;
                                        },
                                        content:function(storage){
                                            if(storage){
                                                return '经过'+storage[1]+'个回合结束后，获得'+storage[0]+'层“卡牌无效”的效果';
                                            }
                                            return '未指定施法效果';
                                        },
                                    },
                                },
                                effect:{
                                    charlotte:true,
                                    onremove:true,
                                    trigger:{player:['useCardToBefore','useCard']},
                                    forced:true,
                                    filter:function(event,player){
                                        return player.hasMark('txhj_yaoshu_effect');
                                    },
                                    content:function(){
                                        trigger.targets.length=0;
                                        trigger.all_excluded=true;
                                        game.log(trigger.card,'无效');
                                        player.removeMark('txhj_yaoshu_effect',1,false);
                                        if(!player.countMark('txhj_yaoshu_effect')) player.removeSkill('txhj_yaoshu_effect');
                                    },
                                    marktext:'妖︎',
                                    intro:{
                                        onremove:true,
                                        content:'接下来使用或打出的#张牌无效',
                                    },
                                },
                            },
                        },
                        //------咒法------//
                        'txhj_zhoufa':{
                            mahouSkill:true,
                            enable:'phaseUse',
                            usable:1,
                            filter:function(event,player){
                                return game.hasPlayer(function(current){
                                    return current!=player&&!current.hasSkill('txhj_zhoufa_mahou');      
                                });
                            },
                            filterTarget:function(card,player,target){
                                return target!=player&&!target.hasSkill('txhj_zhoufa_mahou');
                            },
                            content:function(){
                                'step 0'
                                player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
                                    var player=_status.event.player;
                                    var safe=1;
                                    if(safe<Math.min(3,game.countPlayer(),player.getDamagedHp())){
                                        var next=player.next;
                                        while(next!=player&&get.attitude(next,player)>0){
                                            safe++;
                                            next=next.next;
                                        }
                                    }
                                    return Math.max(1,Math.min(safe,3,game.countPlayer(),player.getDamagedHp()))-1;
                                });
                                'step 1'

                                if(!player.storage.txhj_zhoufa_mahou){
                                    player.storage.txhj_zhoufa_mahou=[result.index+1,result.index+1,target];
                                }
                                player.addTempSkill('txhj_zhoufa_mahou',{player:'die'});
                            },
                            ai:{
                                damage:true,
                                thunderAttack:true,
                                threaten:5.5,
                                order:8,
                                result:{
                                    target:function(player,target){
                                        var eff=get.damageEffect(target,player,target,'thunder');
                                        if(target.isLinked()){
                                            return eff/10;
                                        }
                                        else{
                                            return eff;
                                        }
                                    },
                                },
                            },
                            subSkill:{
                                mahou:{
                                    trigger:{global:'phaseEnd'},
                                    forced:true,
                                    popup:false,
                                    charlotte:true,
                                    content:function(){
                                        var list=player.storage.txhj_zhoufa_mahou;
                                        list[1]--;
                                        if(list[1]==0){
                                            game.log(player,'的“咒法”魔法生效');
                                            player.logSkill('txhj_zhoufa');
                                            var num=list[0];
                                            var
                                            target=list[2];
                                            if(target&&target.isAlive()){
                                                player.line(target,'thunder');
                                                target.damage(num,'thunder');
                                            }
                                            player.removeSkill('txhj_zhoufa_mahou');
                                        }
                                        else{
                                            game.log(player,'的“咒法”魔法剩余','#g'+(list[1])+'回合');
                                            player.markSkill('txhj_zhoufa_mahou');
                                        }
                                    },
                                    mark:true,
                                    onremove:true,
                                    marktext:'法',
                                    intro:{
                                        name:'施法：咒法',
                                        markcount:function(storage){
                                            if(storage) return storage[0]+'-'+storage[1];
                                            return 0;
                                        },
                                        content:function(storage){
                                            if(storage){
                                                return '经过'+storage[1]+'个回合结束时后，施法目标:'+get.translation(storage[2])+'受到'+storage[0]+'点雷电伤害';
                                            }
                                            return '未指定施法效果';
                                        },
                                    },
                                },
                            },
                        },
                        //------尸怨------//
                        "txhj_shiyuan":{
                            forced:true,
                            priority:1,
                            trigger:{
                                source:"damageBegin1"
                            },
                            group:["txhj_shiyuan_die","txhj_shiyuan_fuhuo"],
                            content:function(){
                                trigger.num++;
                            },
                            subSkill:{
                                die:{
                                    trigger:{
                                        player:"dying"
                                    },
                                    forced:true,
                                    priority:4,
                                    content:function(){
                                        player.die();
                                        game.log(player,'因【尸怨】直接死亡。');
                                    },
                                },
                                fuhuo:{
                                    trigger:{
                                        source:["dieAfter"],
                                    },
                                    priority:5,
                                    forced:true,
                                    filter:function(event,player){
                                        if(player.identity=='zhu'||event.player.identity=='zhu')return false;
                                        return event.player!=player;
                                    },
                                    content:function(){
                                        'step 0'
                                        var target=trigger.player;
                                        target.side=player.side;
                                        target.identity=player.identity;
                                        target.setIdentity(get.translation(player.identity));
                                        target.node.identity.dataset.color=player.identity;
                                        target.init('txhj_zhangyuanshibing');
                                        target.maxHp=3;
                                        target.revive(Infinity);
                                        target.draw(4);
                                        target.update();
                                    },
                                }, 
                            },
                        },
                        //------人望------//
                        "txhj_renwang":{
                            trigger:{
                                player:"loseAfter",
                                global:"cardsDiscardAfter",
                            },
                            forced:true,
                            marktext:"方",
                            intro:{
                                content:"expansion",
                                markcount:"expansion",
                            },
                            mod:{
                                maxHandcard:function (player,num){
                                    if(player.getExpansions('txhj_renwang')){
                                        return num+player.getExpansions('txhj_renwang').length;
                                    }else{
                                        return num;
                                    }
                                },          
                                cardUsable:function(card,player,num){
                                    if(card.name=='sha'){
                                        if(player.getExpansions('txhj_renwang')){       
                                            return num+Math.ceil(player.getExpansions('txhj_renwang').length/5);
                                        }else{
                                            return num;
                                        }       
                                    }
                                },
                            },
                            filter:function(event,player){
                                if(event.type=='discard') return false;
                                var evt=event.getParent();
                                if(evt.name!='orderingDiscard'||!evt.relatedEvent||evt.relatedEvent.player!=player||!['useCard','respond'].contains(evt.relatedEvent.name)) return false;
                                return (event.cards2||event.cards).filterInD('d').length>0;
                            },
                            content:function(){
                                var card=trigger.cards[0];
                                player.addToExpansion(card,'gain2').gaintag.add('txhj_renwang');
                            },
                        },
                        //------人方------//
                        "txhj_renfang":{
                            audio:2,
                            mahouSkill:true,
                            enable:'phaseUse',
                            usable:1,
                            filter:function(event,player){
                                return !player.hasSkill('txhj_renfang_mahou')&&player.getExpansions('txhj_renwang').length>=36;
                            },
                            prompt:"是否移去36张“方”，并施法？",
                            content:function(){
                                'step 0'
                                var list=player.getExpansions('txhj_renwang');
                                player.loseToDiscardpile(list.slice(0,36));
                                player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
                                    var player=_status.event.player;
                                    var safe=1;
                                    if(safe<Math.min(3,game.countPlayer(),player.getDamagedHp())){
                                        var next=player.next;
                                        while(next!=player&&get.attitude(next,player)>0){
                                            safe++;
                                            next=next.next;
                                        }
                                    }
                                    return Math.max(1,Math.min(safe,3,game.countPlayer(),player.getDamagedHp()))-1;
                                });
                                'step 1'
                                player.storage.txhj_renfang_mahou=[result.index+1,result.index+1];
                                player.addTempSkill('txhj_renfang_mahou',{player:'die'});
                            },
                            ai:{
                                order:9,
                                result:{
                                    player:1,
                                },
                            },
                            subSkill:{
                                mahou:{
                                    trigger:{global:'phaseEnd'},
                                    priority:2,
                                    forced:true,
                                    popup:false,
                                    charlotte:true,
                                    content:function(){
                                        "step 0"
                                        var list=player.storage.txhj_renfang_mahou;
                                        list[1]--;
                                        if(list[1]==0){
                                            game.log(player,'的“人方”魔法生效');
                                            player.logSkill('txhj_renfang');
                                            player.markSkill('txhj_renfang_mahou');
                                            event.count=list[0];
                                            event.goto(1);                  
                                        }
                                        else{
                                            game.log(player,'的“人方”魔法剩余','#g'+(list[1])+'回合');
                                            player.markSkill('txhj_renfang_mahou');
                                            event.finish();
                                        }
                                        "step 1"
                                        event.count--;              
                                        player.chooseTarget(true,'选择一个目标对其造成36点雷电伤害',function(card,player,target){
                                            return player!=target&&!target.hasSkill('txhj_renfang_miss');
                                        }).ai=function(target){
                                            return get.damageEffect(target,player,player,'thunder');
                                        }       
                                        "step 2"
                                        if(result.targets.length){
                                            player.line(result.targets,'thunder');
                                            result.targets[0].damage(36,'thunder');
                                            result.targets[0].addTempSkill('txhj_renfang_miss');
                                            if(event.count>0){
                                                event.goto(1);
                                            }else{
                                                player.removeSkill('txhj_renfang_mahou');
                                                event.finish();
                                            }
                                        }else{
                                            player.removeSkill('txhj_renfang_mahou');
                                            event.finish();
                                        }
                                    },
                                    mark:true,
                                    onremove:true,
                                    marktext:'⚡️',
                                    intro:{
                                        name:'施法：人方',
                                        markcount:function(storage){
                                            if(storage) return storage[0]+'-'+storage[1];
                                            return 0;
                                        },
                                        content:function(storage){
                                            if(storage){
                                                return '经过'+storage[1]+'个“回合结束时”后，依次选择'+storage[0]+'名其他角色，对其各造成36点雷电伤害';
                                            }
                                            return '未指定施法效果';
                                        },
                                    },
                                },
                                miss:{
                                    forced:true,
                                },
                            },
                        },
                        //------地咒------//
                        "txhj_dizhou":{
                            trigger:{
                                player:['phaseBegin','phaseEnd']
                            },
                            filter:function(event,player){
                                return player.countCards('he')>0;
                            },
                            frequent:true,
                            content:function(){
                                'step 0'
                                player.chooseCard('he',get.prompt('txhj_dizhou'),'将一张牌作为“地咒”置于武将牌上').set('ai',function(card){
                                    if(player.getExpansions('txhj_dizhou')){
                                        var suit=get.suit(card);
                                        for(var i of player.getExpansions('txhj_dizhou')){
                                            if(get.suit(i,false)==suit) return 4-get.value(card);
                                        }
                                    }
                                    return 5.5-get.value(card);
                                });
                                'step 1'
                                if(result.bool){
                                    var card=result.cards[0];
                                    player.addToExpansion(card,'gain2').gaintag.add('txhj_dizhou');
                                }
                                else event.finish();
                                'step 2'
                                game.delayx();

                            },
                            intro:{
                                content:"expansion",
                                markcount:"expansion",
                            },
                            onremove:function(player,skill){
                                var cards=player.getExpansions(skill);
                                if(cards.length) player.loseToDiscardpile(cards);
                            },
                            group:['txhj_dizhou_use','txhj_dizhou_clear'],
                            subSkill:{
                                use:{
                                    trigger:{global:['useCardToBefore']},
                                    forced:true,
                                    locked:false,
                                    filter:function(event,player){
                                        if(event.player==player||event.player.isFriendsOf(player))return false;
                                        var cards=player.getExpansions('txhj_dizhou');
                                        if(!player.getExpansions('txhj_dizhou')||!cards.length) return false;
                                        var suit=get.suit(event.card,false);

                                        if(suit=='none') return false;
                                        for(var i of player.getExpansions('txhj_dizhou')){
                                            if(get.suit(i,false)==suit) return true;
                                        }
                                        return false;
                                    },
                                    content:function(){
                                        'step 0'
                                        game.log('地咒:即将对',trigger.player,'使用的',trigger.card,'进行判定');
                                        trigger.player.judge(function(card){
                                            if(get.color(card)=='black')return 1;
                                            return -1;                  
                                        });
                                        'step 1'
                                        if(get.color(result.card)=='black'){
                                            if(trigger.player&&trigger.player.isIn()&&!trigger._notrigger.contains(trigger.player)){
                                                trigger.player.randomDiscard(true);
                                            }   
                                        }
                                        if(get.suit(result.card)=='spade'){
                                            trigger.targets.length = 0;
                                            trigger.all_excluded = true;
                                            trigger.cancel();
                                            game.log(trigger.card,'无效');
                                        }
                                        if(get.number(result.card)>1&&get.number(result.card)<10&&get.suit(result.card)=='spade'){
                                            trigger.player.loseHp(1,true);
                                        }   

                                    },
                                },
                                clear:{
                                    trigger:{
                                        player:'damageEnd'
                                    },
                                    forced:true,
                                    filter:function(event,player){  
                                        if(!player.getExpansions('txhj_dizhou').length) return false;
                                        return true;
                                    },
                                    content:function(){
                                        var cards=player.getExpansions('txhj_dizhou').randomGet();
                                        player.loseToDiscardpile(cards);
                                    },
                                },
                            },
                        },
                        //------地遁------//
                        "txhj_didun":{
                            trigger:{global:'judge'},
                            filter:function(event,player){
                                return player.countCards('hes',{color:'black'})>0;
                            },
                            direct:true,
                            content:function(){
                                "step 0"
                                player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                                get.translation(trigger.player.judging[0])+'，'+get.prompt('txhj_didun'),'hes',function(card){
                                    if(get.color(card)!='black') return false;
                                    var player=_status.event.player;
                                    var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                                    if(mod2!='unchanged') return mod2;
                                    var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
                                    if(mod!='unchanged') return mod;
                                    return true;
                                }).set('ai',function(card){
                                    var trigger=_status.event.getTrigger();
                                    var player=_status.event.player;
                                    var judging=_status.event.judging;
                                    var result=trigger.judge(card)-trigger.judge(judging);
                                    var attitude=get.attitude(player,trigger.player);
                                    if(attitude==0||result==0){
                                        if(trigger.player!=player) return 0;
                                        if(game.hasPlayer(function(current){
                                            return get.attitude(player,current)<0;
                                        })){
                                            var checkx=lib.skill.xinleiji.judgeCheck(card,true)-lib.skill.xinleiji.judgeCheck(judging);
                                            if(checkx>0) return checkx;
                                        }
                                        return 0;
                                    };
                                    if(attitude>0){
                                        return result;
                                    }
                                    else{
                                        return -result;
                                    }
                                }).set('judging',trigger.player.judging[0]);
                                "step 1"
                                if(result.bool){
                                    player.respond(result.cards,'highlight','txhj_didun','noOrdering');
                                }
                                else{
                                    event.finish();
                                }
                                "step 2"
                                if(result.bool){
                                    var card=trigger.player.judging[0];
                                    player.$gain2(card);
                                    player.gain(card);
                                    if(get.color(card)=='black') player.draw();
                                    trigger.player.judging[0]=result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player,'的判定牌改为',result.cards[0]);
                                }
                                "step 3"
                                game.delay(2);
                            },
                            ai:{
                                rejudge:true,
                                tag:{
                                    rejudge:1
                                }
                            }
                        },
                        //------亡怨------//
                        "txhj_wangyuan":{
                            trigger:{global:'dieAfter'},
                            forced:true,
                            group:["txhj_wangyuan_add"],
                            init: function(player, skill) {
                                player.storage.txhj_wangyuan = 0;
                                player.syncStorage('txhj_wangyuan');
                                player.markSkill('txhj_wangyuan');
                            },
                            marktext: "亡怨",
                            intro: {
                                name: "亡怨",
                                content: "本局游戏，你造成的属性伤害基数+#",
                            },
                            content:function(){
                                player.gainMaxHp();
                                player.recover();
                                player.storage.txhj_wangyuan++;
                                player.syncStorage('txhj_wangyuan');
                                player.markSkill('txhj_wangyuan');
                            },
                            ai:{
                                threaten:1.5
                            },
                            subSkill:{
                                add:{
                                    forced:true,
                                    priority:4,
                                    trigger:{
                                        source:"damageBegin1",
                                    },
                                    filter:function(event,player){
                                        if(!event.nature)return false;
                                        return event.notLink()&&player.storage.txhj_wangyuan>0; 
                                    },
                                    content:function(){
                                        var n=player.storage.txhj_wangyuan;
                                        trigger.num+=n;
                                        if(trigger.card){
                                            game.log('亡怨:',trigger.card,'的属性伤害基数+'+n);
                                        }else{
                                            game.log('亡怨:属性伤害基数+'+n);
                                        }
                                    },
                                },
                            },
                        },
                        //------注魂------//
                        "txhj_zhuhun": {
                            enable: "phaseUse",
                            group:["txhj_zhuhun_die"],
                            usable: 1,
                            filter: function (event, player) {
                                if (!player.storage.txhj_zhuhun_die) player.storage.txhj_zhuhun_die = [];
                                return  player.storage.txhj_zhuhun_die.length>0;
                            },
                            content: function () {
                                "step 0"
                                var list = player.storage.txhj_zhuhun_die;
                                player.chooseButton(ui.create.dialog('选择一名已阵亡的同阵营角色令其复活为【长怨尸兵】',list,null), function (button) {
                                    return ai.get.attitude(_status.event.player);
                                });
                                "step 1"
                                if (result.bool) {  
                                    var target = result.buttons[0].link;

                                    target.init('txhj_zhangyuanshibing');
                                    target.maxHp = 3;
                                    target.revive(Infinity);
                                    target.draw(4);
                                    target.update();
                                    player.storage.txhj_zhuhun_die.remove(result.buttons[0].link);
                                    player.markSkill('txhj_zhuhun_die');       
                                }
                            },
                            subSkill: {
                                die: {
                                    trigger: {
                                        global: "die",
                                    },
                                    priority: -15,
                                    forced:true,
                                    marktext: "注魂",
                                    direct: true,
                                    filter: function (event, player) {

                                        return event.player.side == player.side;
                                    },
                                    content: function () {
                                        'step 0'
                                        if (!player.storage.txhj_zhuhun_die) player.storage.txhj_zhuhun_die = [];
                                        'step 1'
                                        player.storage.txhj_zhuhun_die.push(trigger.player);
                                        player.markSkill('txhj_zhuhun_die'); 
                                    },
                                    intro: {
                                        name: "已阵亡的同阵营角色",
                                        content: "player",
                                    },
                                    sub: true,
                                },
                            },
                            ai:{
                                order:9,
                                result:{
                                    player:1,
                                },
                                threaten:2.5,
                            },
                        },
                        //------咒雷------//
                        "txhj_zhoulei":{
                            trigger:{global:'drawAfter'},
                            forced:true,
                            logTarget:'player',
                            filter:function(event,player){
                                if(event.player==player)return false;
                                var a=event.player.countCards('h');
                                if(!player.countMark('txhj_zhoulei')){
                                    var b=0;
                                }else{
                                    var b=player.countMark('txhj_zhoulei');
                                }
                                var c=5-b;
                                return Math.abs(a-b)>=c;
                            },
                            content:function(){
                                player.line(trigger.player,'thunder');
                                trigger.player.damage(1,'thunder');
                                if(player.countMark('txhj_zhoulei')<5){ 
                                    player.addMark('txhj_zhoulei',1,false);
                                    game.log(player,'的【咒雷】已发动次数+1');
                                }

                            },
                            intro:{
                                name:"咒雷",          
                                content:function(storage,player){
                                    if(!player.countMark('txhj_zhoulei')){
                                        var num=0;
                                    }else{
                                        var num=player.countMark("txhj_zhoulei");
                                    }
                                    var c=5-num;
                                    var str='当一名其他角色摸牌后，若其与你的手牌数之差>='+'<b>'+c+'</b>'+'，你对其造成1点雷电伤害。';
                                    return str;
                                },
                            },
                            mark:true,
                            marktext:'咒雷',
                        },
                        //------诡炎------//
                        "txhj_guiyan": {
                            trigger: {
                                player: "phaseZhunbeiBegin",
                            },
                            direct: true,
                            priority:2,
                            forced:true,
                            filter: function (event, player, target) {
                                return game.hasPlayer(function (target) {
                                    return  target.hp>=player.hp&&target!=player;
                                });
                            },
                            content: function () {
                                "step 0"
                                player.chooseTarget(get.prompt('txhj_guiyan'),true, function (card, player, target) {
                                    return target.hp>=player.hp&&target!=player;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);

                                    return -att;
                                };
                                "step 1"
                                if (result.bool) {
                                    var target=result.targets[0];
                                    player.logSkill('txhj_guiyan', result.targets);
                                    player.line(target,'fire');
                                    player.addTempSkill('txhj_guiyan_yan');

                                    player.storage.txhj_guiyan_yan=[];
                                    player.storage.txhj_guiyan_yan.push(target);
                                    player.markSkill('txhj_guiyan_yan');
                                    target.addTempSkill('txhj_guiyan_huo');
                                    if(!target.hasSkill('ranshang')){
                                        target.addSkill('ranshang');
                                    }else{
                                        if(player.canUse('huogong',target)){
                                            player.useCard({name:'huogong',isCard:true},target); 
                                            game.log('【诡炎】:',player,'即将对',target,'使用【火攻】');
                                        }else{
                                            event.finish(); 
                                        }

                                    }
                                }
                            },
                            ai: {
                                threaten: 1.7,
                            },
                            subSkill:{
                                yan:{
                                    mark:true,
                                    marktext:'诡炎',
                                    onremove: function(player, skill) {

                                        player.storage.txhj_guiyan_yan=[];
                                        player.unmarkSkill('txhj_guiyan_yan');
                                    },
                                    intro:{
                                        name:'诡炎：标记目标',
                                        markcount:function(storage){
                                            if(storage) return get.translation(storage[0]);
                                            return 0;
                                        },
                                        content:function(storage){
                                            if(storage){
                                                return '本回合对'+get.translation(storage[0])+'造成的伤害均视为火属性，且伤害+1';
                                            }
                                            return '无效果';
                                        },
                                    },
                                    forced:true,
                                    priority:30,
                                    trigger:{
                                        source:"damageBegin1",
                                    },
                                    filter:function(event,player){
                                        if(event.player==player)return false;
                                        return event.player&&event.player.hasSkill('txhj_guiyan_huo');
                                    },
                                    content:function(){
                                        player.line(trigger.player,'fire'); 
                                        trigger.nature='fire';
                                        trigger.num++;  
                                    },
                                },
                                huo:{
                                    forced:true,
                                },
                            },
                        },
                        //------邪风------//
                        "txhj_xiefeng":{
                            trigger:{player:'phaseAfter'},
                            direct:true,
                            filter:function(event,player){
                                return player.countCards('he')>0;
                            },
                            content:function(){
                                'step 0'
                                var prompt2='弃置至多三张牌并摸一张牌';
                                var next=player.chooseToDiscard('he',[1,3],get.prompt('txhj_xiefeng'),prompt2);
                                next.set('ai',function(card){
                                    return 6-get.value(card);
                                })
                                next.logSkill='txhj_xiefeng';
                                'step 1'
                                if(result.bool){
                                    var cards=result.cards;
                                    player.draw(1,true);
                                    player.addTempSkill('txhj_xiefeng_miss',{player:'die'});
                                    player.addTempSkill('txhj_xiefeng_mianshang',{player:'die'});
                                    if(player.storage.txhj_xiefeng_miss==undefined){
                                        player.storage.txhj_xiefeng_miss=0;
                                    }
                                    player.storage.txhj_xiefeng_miss+=cards.length;
                                    player.syncStorage('txhj_xiefeng_miss');
                                    player.markSkill('txhj_xiefeng_miss');
                                }
                            },
                            subSkill:{
                                miss:{
                                    trigger:{global:'phaseEnd'},
                                    forced:true,
                                    popup:false,
                                    charlotte:true,
                                    content:function(){
                                        player.storage.txhj_xiefeng_miss--;
                                        player.syncStorage('txhj_xiefeng_miss');
                                        player.markSkill('txhj_xiefeng_miss');  
                                        if(player.storage.txhj_xiefeng_miss==0){
                                            game.log(player,'的【邪风】免伤效果失效');
                                            player.logSkill('txhj_xiefeng');

                                            player.unmarkSkill('txhj_xiefeng_miss');
                                            player.removeSkill('txhj_xiefeng_miss');
                                            player.removeSkill('txhj_xiefeng_mianshang');
                                        }
                                        else{
                                            var a=player.storage.txhj_xiefeng_miss;
                                            game.log(player,'的【邪风】免伤效果剩余','#g'+a+'回合');
                                            player.markSkill('txhj_xiefeng_miss');
                                        }
                                    },
                                    mark:true,
                                    onremove:true,
                                    marktext: "邪风",
                                    intro: {
                                        name: "邪风",
                                        content: "接下来的#个回合，防止你受到的非雷电伤害。",
                                    },
                                },
                                mianshang:{
                                    trigger:{player:'damageBegin4'},
                                    filter:function(event){
                                        if(event.nature!='thunder') return true;
                                        return false;
                                    },
                                    mark:true,
                                    forced:true,
                                    content:function(){
                                        trigger.cancel();
                                    },
                                    ai:{
                                        nofire:true,
                                        nodamage:true,
                                        effect:{
                                            target:function(card,player,target,current){
                                                if(get.tag(card,'damage')&&!get.tag(card,'thunderDamage')) return [0,0];
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        //侍灵
                        // 金鸡独立
                        datongSkill1: {
                            trigger: {player: 'dying'},
                            forced: true,
                            charlotte: true,
                            init: function (player) {
                                player.datongSkill1 = false;
                            },
                            filter: function (event, player) {
                                return !player.datongSkill1;
                            },
                            content: function () {
                                var num = 1 - player.hp;
                                if (num) player.recover(num);
                                player.datongSkill1 = true;
                                // game.log(player, '触发了【金鸡独立】');
                                if (player.buff) {
                                    player.buff['datongSkill1'].update();
                                }
    
                            }
                        },
                        //祥云瑞气
        "txhj_ruiSkill1":{
        trigger:{
            player:"phaseUseEnd",
        },
        forced:true,
        filter:function (event,player,target){     
                            
                           return game.hasPlayer(function(target){
                            return target.isEnemiesOf(player)&&target.countCards('h')<player.countCards('h');
                        });
     
           }, 
        content:function(){
            "step 0"
                        var players=game.filterPlayer(function(current){
                    return current.countCards('h')<=player.countCards('h')&&current.isEnemiesOf(player);    
                        });
                        players.remove(player);
                        event.players=players;
                        player.line(players,'green');
                        "step 1"
                        if(event.players.length){
                            var current=event.players.shift();
                                 current.damage(1,'fire');
                        if (player.buff) {
                                    player.buff['txhj_ruiSkill1'].update();
                                }   
                            event.redo();
                        }
        },
        ai:{
            threaten:3.7,
        },
    },
                        // 神妙
                        "txhj_ruiSkill2":{
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd']
                            },
                            filter: function (event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            charlotte: true,
                            content: function () {
                                "step 0"
                                event.numm = player.countCards('h') % 2;
                                event.list1=player.getEnemies().sortBySeat();
                                event.list2=player.getFriends().sortBySeat();
                                "step 1"
    
                                if (event.numm == 1&&event.list2.length){
                                    var target=event.list2.randomGet(1);
                                    game.log('神妙·奇:随机令一名我方角色摸一张牌');
                                    player.line(target,'green');
                                    target.draw();
                                }else if (event.list1.length){
                                    var target=event.list1.randomGet(1);
                                    game.log('神妙·偶:随机令一名敌方角色随机弃置一张牌');
                                    player.line(target,'green');
                                    target.discard(target.getCards('he').randomGet());
                                }
                                if (player.buff) {
                                    player.buff['txhj_ruiSkill2'].update();
                                }
                            },
                        },
                        //洞若观火
                        "txhj_ruiSkill3": {
                            trigger: {target: 'useCardToTargeted'},
                            filter: function (event, player) {
                                return get.type(event.card) == 'trick' && event.player != player;
                            },
                            forced: true,
                            charlotte: true,
                            content: function () {
                                "step 0"
                                player.judge(function (result) {
                                    if (get.color(result) == 'red') return 2;
                                    return -1;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                "step 1"
                                if (result.bool) {
                                   
      trigger.getParent().excluded.add(player);      player.gain(trigger.parent.cards, "gain2");
                                    if (player.buff) {
                                        player.buff['txhj_ruiSkill3'].update();
                                    }
                                }
                            }
                        },
                        // 神鬼不测
                        "txhj_yanSkill1": {
                            trigger: {target: 'useCardToTargeted'},
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return get.type(event.card) == 'trick' && event.player != player && event.targets.length == 1;
                            },
                            content: function () {
                                "step 0"
                                player.judge(function (result) {
                                    if (get.color(result) == 'black') return 2;
                                    return -1;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                "step 1"
                                if (result.bool) {
                                    trigger.targets.remove(player);
                                    trigger.getParent().triggeredTargets2.remove(player);
                                    trigger.untrigger();
                                    if (trigger.parent.card.name == "jiedao" && trigger.player.getEquip(1) == null) {
                                        event.finish();
                                    }
                                    player.useCard(trigger.parent.card, trigger.player);
                                    // game.log(player, '触发了【神鬼不测】');
                                    if (player.buff) {
                                        player.buff['txhj_yanSkill1'].update();
                                    }
                                }
                            }
                        },
                        "txhj_yanSkill2": {
                            trigger: {player: 'damageEnd'},
                            usable: 1,
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return event.source && event.source != player && event.source.isAlive();
                            },
                            content: function () {
                                player.useCard({name: 'sha'}, trigger.source, false);
                                // game.log(player, '触发了【反计】');
                                if (player.buff) {
                                    player.buff['txhj_yanSkill2'].update();
                                }
                            },
                            group: ['txhj_yanSkill2_recover'],
                            subSkill: {
                                recover: {
                                    trigger: {source: 'damageAfter'},
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter: function (event) {
                                        return event.parent.parent.parent.name == 'txhj_yanSkill2';
                                    },
                                    content: function () {
                                        player.recover();
                                        // game.log(player, '触发了【反计】');
                                        if (player.buff) {
                                            player.buff['txhj_yanSkill2'].update();
                                        }
                                    }
                                }
                            }
                        },
                        "txhj_yanSkill3": {
                            trigger: {source: 'damageEnd'},
                            usable: 1,
                            forced: true,
                            charlotte: true,
                            content: function () {
                                "step 0"
                                player.judge();
                                "step 1"
                                if (result.color == 'red') {
                                    player.draw(2);
                                } else if (result.color == 'black') {
                                    player.gainPlayerCard(trigger.player, 'he', true);
                                }
                                // game.log(player, '触发了【天外之火】');
                                if (player.buff) {
                                    player.buff['txhj_yanSkill3'].update();
                                }
                            }
                        },
                      
                        // 神勇
                        "txhj_aHaoSkill2":{
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
                            },
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.es && evt.es.length > 0;
                            },
                            content: function () {
                                "step 0"
                                event.list=player.getEnemies().sortBySeat();
                                "step 1"
                                if(event.list.length){
                                    var target=event.list.shift();
                                    player.line(target,'green');
                                    target.damage();
                                    event.redo();
                                    if (player.buff) {
                                        player.buff['txhj_aHaoSkill2'].update();
                                    }
                                }
                            },
                        },
                        // 攫戾執猛
                        "txhj_aHaoSkill3": {
                            trigger: {
                                player: 'phaseDrawBegin2'
                            },
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return !event.numFixed;
                            },
                            content: function () {
                                trigger.num += player.countCards('e');
                                if (player.buff) {
                                    player.buff['txhj_aHaoSkill3'].update();
                                }
                            },
                            mod: {
                                cardUsable: function (card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + player.countCards('e');
                                    }
                                },
                                maxHandcardBase: function (player, num) {
                                    return num + player.countCards('e');
                                }
                            }
                        },
                        "txhj_luluSkill1": {
                            trigger: {
                                player: 'phaseUseBegin'
                            },
                            forced: true,
                            charlotte: true,
                            content: function () {
                                player.draw(2);
                                // game.log(player, '触发了【如虎添翼】');
                                if (player.buff) {
                                    player.buff['txhj_luluSkill1'].update();
                                }
                            }
                        },
                        "txhj_luluSkill2": {
                            trigger: {
                                player: 'useCardToPlayered'
                            },
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                if (event.card.name != 'sha') return false;
                                var hp = player.hp;
                                var he = player.getCards('h');
                                var list = [];
                                player.getHistory('gain', function (evt) {
                                    if (evt && evt.cards) {
                                        for (var i = 0; i < evt.cards.length; i++) {
                                            if (he.contains(evt.cards[i])) list.add(evt.cards[i]);
                                        }
                                    }
                                });
                                return list.length >= hp && player.countUsed('sha', true) <= 1;
                            },
                            content: function () {
                                var target = trigger.target;
                                trigger.directHit.add(target);
                                var id = target.playerid;
                                var map = trigger.customArgs;
                                if (!map[id]) map[id] = {};
                                if (!map[id].extraDamage) map[id].extraDamage = 0;
                                map[id].extraDamage++;
                                
                                if (player.buff) {
                                    player.buff['txhj_luluSkill2'].update();
                                }
                            }
                        },
                        // 乐不可支
                        "txhj_aleSkill1": {
                            trigger: {
                                target: "useCardToTargeted"
                            },
                            direct: true,
                            charlotte: true,
                            usable: 1,
                            filter: function (event, player) {
                                return event.target == player && get.type(event.card) == 'basic';
                            },
                            content: function () {
                                player.getHistory('custom').push({aleSkill1: true, e: trigger.getParent()});
    
                                if (player.buff) {
                                    player.buff['txhj_aleSkill1'].update();
                                }
                            },
                            group: ['txhj_aleSkill1_after'],
                            subSkill: {
                                after: {
                                    trigger: {
                                        global: ['useCardAfter']
                                    },
                                    direct: true,
                                    charlotte: true,
                                    usable: 1,
                                    filter: function (event, player) {
                                        var damage = player.getHistory('damage', function (evt) {
                                            return event.card && evt.card == event.card;
                                        }).length;
                                        var s = player.getHistory('custom', function (evt) {
                                            return evt.aleSkill1 && evt.e == event;
                                        }).length;
                                        return !damage && s;
                                    },
                                    content: function () {
                                        player.draw();
                                        player.logSkill('txhj_aleSkill1');
    
                                        if (player.buff) {
                                            player.buff['txhj_aleSkill1'].update();
                                        }
                                    }
                                }
                            }
                        },
                        // 饞嘴王
                        "txhj_aleSkill2": {
                            trigger: {player: 'phaseZhunbeiBegin'},
                            direct: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return player.isDamaged() && !player.isMaxHp();
                            },
                            content: function () {
                                player.recover();
                                
                                if (player.buff) {
                                    player.buff['txhj_aleSkill2'].update();
                                }
                            }
                        },
                        // 花容月貌
                        "txhj_yueerSkill1": {
                            trigger: {global: 'damageEnd'},
                            direct: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return event.player.hasSex('male') && player.storage.yueerSkill1;
                            },
                            content: function () {
                                player.recover();
                                player.draw();
                                player.storage.yueerSkill1 = false;
                                
                                if (player.buff) {
                                    player.buff['txhj_yueerSkill1'].update();
                                }
                            },
                            group: ['yueerSkillOver']
                        },
                        yueerSkillOver: {
                            trigger: {global: ['roundStart']},
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return !player.storage.yueerSkill1;
                            },
                            content: function () {
                                player.storage.yueerSkill1 = true;
                            }
                        },
                        // 娇面
                        "txhj_yueerSkill2": {
                            trigger: {player: 'phaseDiscardEnd'},
                            forced: true,
                            charlotte: true,
                            content: function () {
                                player.draw(2);
                                // game.log(player, '触发了【娇面】');
                                if (player.buff) {
                                    player.buff['txhj_yueerSkill2'].update();
                                }
                            }
                        },
                        // 墨玉点雪
                        "txhj_liuliSkill1": {
                            usable: 1,
                            trigger: {
                                player: 'loseEnd'
                            },
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return _status.currentPhase && player != _status.currentPhase;
                            },
                            content: function () {
                                _status.currentPhase.damage();
                                // game.log(player, '触发了【墨玉点雪】');
                                if (player.buff) {
                                    player.buff['txhj_liuliSkill1'].update();
                                }
                            }
                        },
                        "txhj_liuliSkill2": {
                            usable: 1,
                            trigger: {global: 'phaseDiscardEnd'},
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return event.player != player && event.player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) return true;
                                }).length > 0;
                            },
                            content: function () {
                                var card = get.discardPile(function (i) {
                                    return i;
                                });
                                if (card) player.gain(card, 'gain2');
                                // game.log(player, '触发了【伶俐】');
                                if (player.buff) {
                                    player.buff['txhj_liuliSkill2'].update();
                                }
                            }
                        },
                        "txhj_manmanSkill1": {
                            trigger: {player: 'phaseBegin'},
                            forced: true,
                            charlotte: true,
                            content: function () {
                                player.chooseUseTarget({name: 'nanman', isCard: true}, "弄鬼掉猴:回合开始时，你视为使用一张【南蛮入侵】");
                                // game.log(player, '触发了【弄鬼掉猴】');
                                if (player.buff) {
                                    player.buff['txhj_manmanSkill1'].update();
                                }
                            },
                            group: ['txhj_manmanSkill1_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {global: 'damageAfter'},
                                    forced: true,
                                    charlotte: true,
                                    filter: function (event, player) {
                                        return event.card && event.card.name == "nanman" && player.getHistory('sourceDamage', function (evt) {
                                            return evt.card == event.card;
                                        }).length > 0;
                                    },
                                    content: function () {
                                        player.draw(trigger.num);
                                        // game.log(player, '触发了【弄鬼掉猴】');
                                        if (player.buff) {
                                            player.buff['txhj_manmanSkill1'].update();
                                        }
                                    }
                                }
                            }
                        },
                        "txhj_manmanSkill2": {
                            trigger: {source: 'damageAfter'},
                            usable: 1,
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return event.player.isAlive() && event.player.countCards("he") > 0;
                            },
                            content: function () {
                                player.gainPlayerCard(trigger.player, 'he', true);
                                // game.log(player, '触发了【捣蛋】');
                                if (player.buff) {
                                    player.buff['txhj_manmanSkill2'].update();
                                }
                            }
                        },
                        //矢无虚发
                        "txhj_xiaoxiaoSkill1": {
                            trigger: {
                                target: "useCardToTargeted",
                            },
                            usable: 1,
                            charlotte: true,
                            filter: function (event, player) {
                                return get.type(card, 'trick') == 'trick' && event.player != player && event.targets && event.targets.length && game.countPlayer2(function (current) {
                                    return current.getHistory('damage').length > 0;
                                }) == 0;
                            },
                            prompt: "是否发动【矢无虚发】，回血或摸牌？",
                            content: function () {
    
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                    game.log(player, '发动【矢无虚发】回复了一点体力');
                                } else {
                                    player.draw();
                                    game.log(player, '未受伤。摸了一张牌');
                                }
                                // game.log(player, '触发了【矢无虚发】');
                                if (player.buff) {
                                    player.buff['txhj_xiaoxiaoSkill1'].update();
                                }
                            },
                        },
                        //弓上弦
                        "txhj_xiaoxiaoSkill2": {
                            trigger: {player: 'phaseJieshuBegin'},
                            forced: true,
                            unique: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                });
                            },
                            content: function () {
                                "step 0"
                                var players = game.filterPlayer(function (current) {
                                    return current.countCards('e') <= player.countCards('e');
                                });
                                players.remove(player);
                                event.players = players;
                                player.line(players, 'green');
                                "step 1"
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    var hs = current.getCards('h')
                                    if (hs.length) {
                                        var card = hs.randomGet();
                                        player.gain(card, current);
                                        current.$giveAuto(card, player);
                                    }
                                    event.redo();
                                }
                                // game.log(player, '触发了【弓上弦】');
                                if (player.buff) {
                                    player.buff['txhj_xiaoxiaoSkill2'].update();
                                }
                            }
                        },
                        //轻舞飞扬
                        "txhj_xuerenSkill1": {
                            trigger: {player: 'phaseEnd'},
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                return player.getStat('damage');
                            },
                            content: function () {
                                player.draw(1, true);
                                // game.log(player, '发动了【轻舞飞扬】');
                                if (player.buff) {
                                    player.buff['txhj_xuerenSkill1'].update();
                                }
                            },
                        },
                        //倚天拔地
                        "txhj_xuanwuSkill1": {
                            trigger: {
                                global: "recoverBefore",
                            },
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
    
                                return event.player != player && !player.isHealthy();
                            },
                            content: function () {
                                player.recover();
                                // game.log(player, '发动了【倚天拔地】');
                                if (player.buff) {
                                    player.buff['txhj_xuanwuSkill1'].update();
                                }
                            },
                        },
                        //蛇影
                        "txhj_xuanwuSkill2": {
                            trigger: {
                                player: "loseAfter",
                            },
                            usable: 1,
                            forced: true,
                            charlotte: true,
                            filter: function (event, player) {
                                if (event.name != 'lose' || event.type != 'discard') return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length > 0;
                            },
                            content: function () {
                                "step 0"
                                player.draw(Math.ceil(trigger.getl(player).hs.length / 2));
                                event.count = Math.ceil(trigger.getl(player).hs.length / 2);
                                "step 1"
                                event.list = player.getEnemies().sortBySeat();
                                "step 2"
                                if (event.list.length) {
                                    var target = event.list.shift();
                                    player.line(target, 'green');
                                    target.damage(1, true);
                                    event.count--;
                                    if (event.count > 0) {
                                        event.redo();
                                    } else {
                                        event.finish();
                                    }
                                }
                                // game.log(player, '发动了【蛇影】');
                                if (player.buff) {
                                    player.buff['txhj_xuanwuSkill2'].update();
                                }
                            },
                        },
                        //玄冥真主
                        "txhj_xuanwuSkill3": {
                            trigger: {
                                target: "useCardToTargeted",
                            },
                            forced: true,
                            charlotte: true,
                            filter: function (event, player, card) {
                                return get.number(event.card) <= player.countCards('h') && get.type(event.card, 'trick') == 'trick' && event.player != player && event.targets && event.targets.length;
                            },
                            content: function () {
                                trigger.cancel();
                                trigger.targets.remove(player);
                                trigger.getParent().triggeredTargets2.remove(player);
                                trigger.untrigger();
                                // game.log(player, '发动了【玄冥真主】');
                                if (player.buff) {
                                    player.buff['txhj_xuanwuSkill3'].update();
                                }
                            },
                        },
                        /*贪食 来源剑阁模式boss技能*/
                        'txhj_tanshi': {
                            trigger: {player: 'phaseEnd'},
                            forced: true,
                            check: function () {
                                return false;
                            },
                            filter: function (event, player) {
                                return player.countCards('h') > 0;
                            },
                            content: function () {
                                player.chooseToDiscard('h', true);
                            }
                        },
                        'txhj_oldhuxiao': {
                            shaRelated: true,
                            audio: 'huxiao',
                            trigger: {player: 'shaMiss'},
                            forced: true,
                            content: function () {
                                if (player.stat[player.stat.length - 1].card.sha > 0) {
                                    player.stat[player.stat.length - 1].card.sha--;
                                }
                            }
                        },
                        //--------------------------------------//







                },
                translate: {
                    /*黄天之怒*/
                    "txhj_yaoshu":"妖术",
                    "txhj_yaoshu_info":"出牌阶段限一次，你可以对一名其他角色施法，令其打出或使用的下X张牌无效。",
                    "txhj_zhoufa":"咒法",
                    "txhj_zhoufa_info":"出牌阶段限一次，你可以对一名其他角色施法，对其造成X点雷电伤害。",
                    "txhj_zhouzu":"咒诅",
                    "txhj_zhouzu_info":"出牌阶段限一次，你可以对一名其他角色施法，令其弃置X张牌（不足则全弃），对其造成一点雷电伤害。",
                    "txhj_huangjin":"黄巾",
                    "txhj_huangjin_info":"当你成为【杀】的目标时，你可以判定，若结果与此杀点数之差小于等于1，此【杀】对你无效。",
                    "txhj_guimen":"鬼门",
                    "txhj_guimen_info":"锁定技，当你因弃置而失去♠️牌后，你判定，若结果与失去的牌点数之差小于等于1，你对一名其他角色造成2点雷电伤害。",
                    "txhj_dizhou":"地咒",
                    "txhj_dizhou_info":"准备阶段或结束阶段，你可以将一张牌置于武将牌上，敌方使用与“地咒”牌花色相同的牌时，其判定，若为:黑色，其随机弃置一张牌;♠️，此牌无效;♠️2～9，其失去一点体力。当你受到伤害后，随机移去一张“地咒”",
                    "txhj_didun":"地遁",
                    "txhj_didun_info":"当一名角色的判定牌生效前，你可以打出一张黑色牌替换之，若被替换的判定牌为黑色，你摸一张牌。",
                    "txhj_renwang":"人望",
                    "txhj_renwang_info":"当你使用或打出的牌置入弃牌堆后，将此牌置于武将牌上，称为“方”;你的手牌上限+X;你可以多使用X/5张【杀】(X为“方”数)。",
                    "txhj_renfang":"人方",
                    "txhj_renfang_info":"出牌阶段限一次，你可以移去36张“方”，然后施法：对X名角色造成36点伤害。",
                    "txhj_wangyuan":"亡怨",
                    "txhj_wangyuan_info":"锁定技，当一名角色死亡时，你增加1点体力上限并回复1点体力，然后你本局造成的属性伤害基数+1",
                    "txhj_shiyuan":"尸怨",
                    "txhj_shiyuan_info":"锁定技，你造成的伤害+1;当你进入濒死状态时，你死亡;你杀死的角色复活为【长怨尸兵】并加入你的阵营。",
                    "txhj_zhuhun":"注魂",
                    "txhj_zhuhun_info":"出牌阶段限一次，你可以令一名已死亡的同阵营角色复活为【长怨尸兵】。",
                    "txhj_zhoulei":"咒雷",
                    "txhj_zhoulei_info":"锁定技，当一名角色摸牌后，若该角色与你的手牌数之差大于等于（5-X），你对其造成一点雷电伤害（X为此技能发动次数且至多为5）。",
                    "txhj_guiyan":"诡炎",
                    "txhj_guiyan_info":"锁定技，准备阶段，你选择一名体力值大于等于你的角色，令其获得“燃殇”。若其已拥有“燃殇”，改为你视为对其使用一张【火攻】。本回合你对此角色造成的伤害均视为火焰伤害且伤害+1。",
                    "txhj_xiefeng":"邪风",
                    "txhj_xiefeng_info":"结束阶段，你可弃置至多三张牌，然后摸一张牌。防止你于下X回合受到的非雷电伤害（X为你弃置的牌数）",

                    'txhj_oldhuxiao': '虎啸',
                    'txhj_oldhuxiao_info': '锁定技，当你使用的【杀】被【闪】抵消后，你令此【杀】不计入使用次数',
                    "txhj_datongSkill1": "金鸡独立",
                    // "txhj_datongSkill1_info": "当你进入濒死状态时，你回复体力至1点 (每局游戏限一次).",
                    "txhj_ruiSkill1": "祥云瑞氣",
                    // "txhj_ruiSkill1_info": "出牌阶段结束时，你可以选择x名手牌数小于你的其他角色，对其各造成1点火焰伤害.",
                    "txhj_ruiSkill2": "神妙",
                    // "txhj_ruiSkill2_info": "准备阶段和结束阶段，若你的手牌数为奇数，你令一名角色摸一张牌；若手牌数为偶数，你令一名角色随机弃一张牌.",
                    "txhj_ruiSkill3": "洞若观火",
                    // "txhj_ruiSkill3_info": "当你成为其他角色使用的普通锦囊牌的目标时，你进行判定：若为红色，则此锦囊无效且你获得之.",
                    "txhj_yanSkill1": "神鬼不测",
                    // "txhj_yanSkill1_info": "当你成为其他角色使用的普通锦囊的唯一目标时，你进行判定：若为黑色，则改为你对使用者使用该锦囊.",
                    "txhj_yanSkill2": "反计",
                    // "txhj_yanSkill2_info": "每回合限一次，当你受到其他角色的伤害后，你视为对伤害来源使用一张杀，若该杀造成伤害，则你回复1点体力.",
                    "txhj_yanSkill3": "天外之火",
                    // "txhj_yanSkill3_info": "每回合限一次，当你对其他角色造成伤害后，进行一次判定：黑色你获得其一张牌，红色你摸两张牌.",
                    "aHaoSkill1": "豪门贵胄",
                    // "aHaoSkill1_info": "游戏开始时，你的每个空置的装备区均随机获得并使用一张装备.",
                    "txhj_aHaoSkill2": "神勇",
                    // "txhj_aHaoSkill2_info": "当你失去装备区的牌时，你可以选择x名角色对其各造成1点伤害(x为场上存活的角色数).",
                    "txhj_aHaoSkill3": "攫戾執猛",
                    // "txhj_aHaoSkill3_info": "你摸牌阶段摸牌数、出杀次数、手牌上限+x (x为装备区的个数).",
                    "txhj_luluSkill1": "如虎添翼",
                    // "txhj_luluSkill1_info": "出牌阶段开始时，你摸两张牌.",
                    "txhj_luluSkill2": "虎威",
                    // "txhj_luluSkill2_info": "你于回合内使用第一张[杀]时，若你本回合获得牌数不小于x (x为你的当前体力值)，则你此[杀]不可响应且伤害+1.",
                    "txhj_aleSkill2": "饞嘴王",
                    // "txhj_aleSkill2_info": "准备阶段，若你已受伤且体力值不是全场最高，你回复1点体力.",
                    "txhj_aleSkill1": "乐不可支",
                    // "txhj_aleSkill1_info": "当你于一个回合第一次成为一张基本牌的目标后，若此牌未对你造成伤害，你摸一张牌.",
                    "txhj_yueerSkill1": "花容月貌",
                    // "txhj_yueerSkill1_info": "每轮限一次，当男性角色受到伤害后，你回复一点体力并摸一张牌.",
                    "txhj_yueerSkill2": "娇面",
                    // "txhj_yueerSkill2_info": "弃牌阶段结束时，你摸两张牌.",
                    "txhj_liuliSkill1": "墨玉点雪",
                    // "txhj_liuliSkill1_info": "其他角色的回合限一次，当你失去牌时，对当前回合角色造成1点伤害.",
                    "txhj_liuliSkill2": "伶俐",
                    // "txhj_liuliSkill2_info": "每回合限一次，其他角色在弃牌阶段弃牌后，你从弃牌堆获得一张牌.",
                    "txhj_manmanSkill1": "弄鬼掉猴",
                    "txhj_manmanSkill2": "捣蛋",
                    "txhj_xiaoxiaoSkill1": "矢无虚发",
                    "txhj_xiaoxiaoSkill2": "弓上弦",
                    "txhj_xuerenSkill1": "轻舞飞扬",
                    "txhj_xuanwuSkill1": "倚天拔地",
                    "txhj_xuanwuSkill2": "蛇影",
                    "txhj_xuanwuSkill3": "玄冥真主",
                    "aHaoSkill1":"豪门贵胄",
                    "txhj_aHaoSkill2":"神勇",
                    "txhj_aHaoSkill3":"攫戾執猛",
                    // "shenyong_info":"当你于牌局内失去装备牌时，对所有敌人造成一点伤害。",
                    'txhj_tanshi': '贪食',
                    'txhj_tanshi_info': '锁定技，结束阶段开始时，你须弃置一张手牌',

                    "txhj_daiyuan": "待援",
                    "txhj_daiyuan_info": "每名角色的出牌阶段每项限一次，其可以弃置两张颜色或类型不同的牌，令你回复一点体力。。",
                    "txhj_daiyuan2": "待援",
                    "txhj_daiyuan2_info": "每名角色的出牌阶段每项限一次，其可以弃置两张颜色或类型不同的牌，令你回复一点体力。",
                    "txhj_zuijiu": "醉酒",
                    "txhj_zuijiu_info": "锁定技，你使用【杀】伤害+1。",
                    "txhj_baoji": "爆击",
                    "txhj_baoji_info": "锁定技，你使用【杀】造成伤害时，有低概率令此伤害+1。",
                    "txhj_juhun": "拘魂",
                    "txhj_juhun_info": "锁定技，准备阶段，你随机令一名于你上回合结束后阵亡的己方角色复活，将体力回复至三点，摸三张牌。",
                    "txhj_guimei": "鬼魅",
                    "txhj_guimei_info": "锁定技，你不能成为延时锦囊的目标。",
                    "txhj_baolian": "暴敛",
                    "txhj_baolian_info": "锁定技，结束阶段，你摸两张牌。",
                    "txhj_beiming": "悲鸣",
                    "txhj_beiming_info": "锁定技，你死亡时，杀死你的角色弃置所有手牌。",

                    "txhj_kuangbao": "狂暴",
                    "txhj_add": "狂暴",
                    "txhj_clear": "狂暴",
                    "txhj_kuangbao_info": "锁定技，若你连续七轮未进入濒死状态，本局游戏中，你造成的伤害+1。（可叠加）",
                    "txhj_debuff": "溃败",

                    "txhj_tunshi": "吞噬",
                    "txhj_tunshi_info": "锁定技，准备阶段，你对一名手牌数大于你的敌方角色造成一点伤害。",
                    "txhj_chuanyun": "穿云",
                    "txhj_chuanyun_info": "结束阶段，你可以对一名体力值大于你的敌方角色造成一点伤害。",

                    "txhj_guihuo": "鬼火",
                    "txhj_guihuo_info": "结束阶段，你可以对一名其他角色造成1点火焰伤害",

                    "txhj_luolei": "落雷",
                    "txhj_luolei_info": "准备阶段，你可以对一名其他角色造成1点雷电伤害",

                    "txhj_wangzu": "亡阻",
                    "txhj_wangzu_info": "锁定技，你死亡后，若此时为其他角色的出牌阶段，则立刻结束此阶段。",

                    "shiwuxufa": "矢无虚发",
                    "shiwuxufa_info": "每回合限一次，当你成为其他角色使用的普通锦囊牌的目标时，若你本回合未受伤，回复一点体力（满体力则摸一张牌）",

                    "gongshangxian": "弓上弦",
                    "gongshangxian_info": "弃牌阶段结束时，你从每名装备区装备数不大于你的其他角色处随机获得1张手牌",

                    "qingwufeiyang": "轻舞飞扬",
                    "qingwufeiyang_info": "回合结束时，若你本回合造成过伤害，摸一张牌。",

                    "yitianbadi": "倚天拔地",
                    "yitianbadi_info": "每当其他角色回复体力时，你回复一点体力。",

                    "txhj_sheying": "蛇影",
                    "txhj_sheying_info": "每回合限一次，当你弃置手牌或手牌被弃置时，你随机对X名敌方角色造成1点伤害并摸X张牌。（X为你本次弃置手牌数除以2向上取整）",

                    "xuanminzhenzhu": "玄冥真主",
                    "xuanminzhenzhu_info": "当其他角色使用锦囊牌指定你为目标时，若该牌点数小于等于你的手牌数，则该锦囊无效",
                },
            },
            intro: ""
                + "先行版：2.0.0",
            author: "太虚幻境攻坚小分队",
            diskURL: "",
            forumURL: "",
            version: "2.0",
        },
    }
});