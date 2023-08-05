game.import("侍灵", function (lib, game, ui, get, ai, _status) {
    window.Servant = /** @class */ (function () {
        function Servant(name, isPicture) {
            this.isPicture = isPicture;
            this.nickName = name;
            this.textName = servantData.servant[name].textName;
            this.setData();
            if (!isPicture) {
                this.initSLEvent();
            }
            lib.skill._slEnterGame = {
                trigger: {
                    global: 'gameDrawBefore'
                },
                forced: true,
                filter: function (event, player) {
                    return player == game.me;
                },
                content: function () {
                    var buffs = Object.keys(servantData.skillDesc[txhj.servant.nickName]);
                    for (const buff of buffs) {
                        player.addSkill(buff);
                    }
                    txhj.servant.initZuodian();
                }
            };
        }

        Servant.prototype.getData = function () {
            if (!this.nickName || this.nickName == "") {
                return null;
            }
            return servantData.servant[this.nickName];
        };

        Servant.prototype.setData = function () {
            if (!this.nickName || this.nickName == "") {
                return;
            }
            var obj = this.getData();
            // console.log(obj);
            if (obj) {
                this.textName = obj.textName;
                if (this.isPicture) {
                    this.name = txhjPack.path + "/image/servant/picture/" + this.nickName + ".png";
                } else {
                    this.name = "../../../太虚幻境/image/servant/" + obj.nickName;
                }
                this.height = obj.height;
                this.width = obj.width;
                this.angle = obj.angle;
                this.action = obj.action;
                this.opacity = obj.opacity;
                this.clipSlots = obj.clipSlots;
                this.hideSlots = obj.hideSlots;
                this.loop = obj.loop;
                this.grade = obj.grade;
                this.data = obj;
                this.actions = this.getAction();
            } else {
                alert("Servant " + this.nickName + " not found");
            }
        };

        Servant.prototype.play = function () {
            var that = this;
            dcdAnim.dprAdaptive = true;
            dcdAnim.loadSpine(this.name, "skel", function () {
                that.nowPlay = dcdAnim.playSpine(obj);
                // console.log(that.nowPlay);
            })
        }

        Servant.prototype.chooseingPlay = function (ele, reset) {
            if (this.isPicture) {
                // ele.style.backgroundImage = "url(" + txhjPack.path + "/image/servant/picture/" + this.nickName + ".png)";
                ele.style.backgroundImage = "url(" + this.name + ")";
                ele.style.backgroundSize = "contain";
                ele.style.backgroundRepeat = "no-repeat";
                ele.style.backgroundPosition = "center";
                return;
            }
            if (reset && this.nowPlay) {
                dcdAnim.stopSpine(this.nowPlay);
            }
            var data = this.data;
            this.referNode = ele;
            this.x = dui.isMobile() ? this.data.chooseServant.x : this.data.pc.chooseServant.x;
            this.y = dui.isMobile() ? this.data.chooseServant.y : this.data.pc.chooseServant.y;
            this.scale = dui.isMobile() ? this.data.chooseServant.scale : this.data.pc.chooseServant.scale;
            var obj = Object.assign({}, this);
            if (!dcdAnim.dprAdaptive) dcdAnim.dprAdaptive = true;
            if (dcdAnim.hasSpine(this.nickName)) {
                this.nowPlay = dcdAnim.playSpine(obj);
                // console.log(that.nowPlay);
            } else {
                var that = this;
                dcdAnim.loadSpine(this.name, "skel", function () {
                    that.nowPlay = dcdAnim.playSpine(obj);
                    // console.log(that.nowPlay);
                })
            }
            this.show();
        };

        Servant.prototype.consoledeskPlay = function (ele) {
            if (this.isPicture) {
                // ele.style.backgroundImage = "url(" + txhjPack.path + "/image/servant/picture/" + this.nickName + ".png)";
                ele.style.backgroundImage = "url(" + this.name + ")";
                ele.style.backgroundSize = "contain";
                ele.style.backgroundRepeat = "no-repeat";
                ele.style.backgroundPosition = "center";
                return;
            }
            var that = this;
            if (!this.nowPlay) {
                this.x = this.data.consoledesk.x;
                this.y = this.data.consoledesk.y;
                this.scale = this.data.consoledesk.scale;
                var obj = Object.assign({}, this);
                dcdAnim.loadSpine(this.name, "skel", function () {
                    if (!dcdAnim.dprAdaptive) dcdAnim.dprAdaptive = true;
                    that.nowPlay = dcdAnim.playSpine(obj);
                    return play();
                })
            } else {
                this.show();
                if (!this.isConsoledeskMoved) play();
            }

            function play() {
                that.nowPlay.referNode = ele;
                that.nowPlay.x = dui.isMobile() ? that.data.consoledesk.x : that.data.pc.consoledesk.x;
                that.nowPlay.y = dui.isMobile() ? that.data.consoledesk.y : that.data.pc.consoledesk.y;
                that.nowPlay.scale = dui.isMobile() ? that.data.consoledesk.scale : that.data.pc.consoledesk.scale;
                that.nowPlay.referFollow = true;
                setTimeout(() => {
                    that.nowPlay.referFollow = false;
                }, 1000);
                this.isConsoledeskMoved = true;
            }
        };

        Servant.prototype.playAction = function (action) {
            if (!this.nowPlay) {
                return;
            }
            this.nowPlay.setAction(action);
            this.nowPlay.skeleton.state.addAnimation(0, "daiji1", true, -0.01);
        };

        Servant.prototype.getAction = function () {
            var list = [];
            var data = servantData.action[this.nickName];
            delete data.jingzhi;
            delete data.zuodian;
            delete data.gongji;
            for (var key in data) {
                for (var i = 1; i <= data[key]; i++) {
                    list.push(key + i);
                }
            }
            var index = list.indexOf("daiji1");
            list.splice(index, 1);
            return list;
        };

        Servant.prototype.randomPlayAction = function () {
            if (this.isPicture) return;
            var list = this.actions;
            var index = Math.floor(Math.random() * list.length);
            this.playAction(list[index]);
        };

        Servant.prototype.getDirection = function (ele, sl) {
            var width = document.body.clientWidth / 2;
            var pos = this.getCoordinate(ele);
            if (!pos) return false;
            var isLeft = pos.x >= width ? false : true;
            if (sl) {
                if (isLeft) {
                    return {x: [0, 1.2], y: [0, 0], isLeft: isLeft};
                } else return {x: [0, -0.1], y: [0, 0], isLeft: isLeft};
            } else {
                if (isLeft) {
                    return {x: [0, 0.4], y: [0, 0.5], isLeft: isLeft};
                } else return {x: [0, 0.63], y: [0, 0.5], isLeft: isLeft};
            }
        };

        Servant.prototype.getCoordinate = function (ele) {
            if (!ele && !decadeUI) return false;
            var rect = ele.getBoundingClientRect();
            return {
                x: rect.left,
                y: decadeUI.get.bodySize().height - rect.bottom,
                width: rect.width,
                height: rect.height
            };
        };

        Servant.prototype.initSLEvent = function () {
            lib.skill._slDamage = {
                trigger: {
                    source: 'damageBegin'
                },
                forced: true,
                filter: function (event, player) {
                    if (typeof event.num != "number") return false;
                    return player == game.me && event.num > 0;
                },
                content: function () {
                    if (txhj.servant.nowPlay.opacity == 1 || txhj.servant.nowPlay.opacity == undefined) {
                        txhj.servant.hide();
                        // console.log("暂停");
                    }
                    var target = trigger.player;
                    var direction = txhj.servant.getDirection(target, true);
                    if (!direction) return;
                    var action = direction.isLeft ? "gongji2" : "gongji1";
                    var {...sprite} = Object.assign({}, txhj.servant);
                    sprite.x = direction.x;
                    sprite.y = sprite.data.special ? sprite.data.py.gj.y : direction.y;
                    sprite.scale = dui.isMobile() ? sprite.data.match.scale : sprite.data.pc.match.scale;
                    sprite.referNode = target;
                    sprite.referFollow = true;
                    sprite.action = action;
                    sprite.loop = false;
                    sprite.oncomplete = function () {
                        if (txhj.servant.nowPlay.opacity == 0) {
                            txhj.servant.show();
                            // console.log("恢复");
                        }
                        this.oncomplete = null;
                    }
                    dcdAnim.playSpine(sprite);
                    game.playAudio("..", "extension", "太虚幻境/audio/servant", txhj.servant.nickName + ".mp3");
                }
            };

            lib.skill._slUseCard = {
                trigger: {
                    player: 'useCardBefore'
                },
                forced: true,
                filter: function (event, player) {
                    return player == game.me && (txhj.servant.nowPlay.opacity == 1 || txhj.servant.nowPlay.opacity == undefined);
                },
                content: function () {
                    var card = trigger.card;
                    if (get.type(card) == 'trick' || card.name == 'tao' || card.name == 'jiu') {
                        txhj.servant.playAction("jinnang1");
                    }
                }
            };

            lib.skill._slHurt = {
                trigger: {
                    player: ['damageBegin4', 'loseHpEnd']
                },
                filter: function (event, player) {
                    return player == game.me;
                },
                forced: true,
                content: function () {
                    var action = servantData.action[txhj.servant.nickName].shouji;
                    if (action == 1) {
                        txhj.servant.playAction("shouji1");
                    } else {
                        var number = Math.floor(Math.random() * action) + 1;
                        txhj.servant.playAction("shouji" + number);
                    }
                }
            };
        }

        Servant.prototype.initZuodian = function () {
            var handcard = document.getElementsByClassName("hand-wrap");
            if (!this.zuoDian) {
                var waitDiv = document.createElement("div");
                waitDiv.classList.add("taixuhuanjing_wait");
                waitDiv.onclick = function () {
                    txhj.servant.randomPlayAction();
                }
                var zdDiv = document.createElement("div");
                zdDiv.innerHTML = this.textName;
                zdDiv.classList.add("taixuhuanjing_zuodian");
                waitDiv.appendChild(zdDiv);
                this.zuoDian = waitDiv;
                document.body.appendChild(waitDiv);
                var shoushaUI = document.getElementsByClassName("lbtn-controls");

                function createBtn() {
                    var btn = document.createElement("div");
                    btn.classList.add("lbtn-control");
                    btn.style.backgroundImage = "url(" + txhjPack.path + "/image/servant/btn.png)";
                    btn.style.backgroundRepeat = "no-repeat";
                    btn.onclick = function () {
                        game.playAudio("..", "extension", "太虚幻境/audio", "clickBtn.mp3");
                        var wdiv = getComputedStyle(waitDiv).display;
                        if (wdiv == "none") {
                            waitDiv.style.display = "block";
                            handcard[0].style.left = "245px";
                            dui.layout.updateHand();
                            if (!txhj.servant.isPicture) {
                                txhj.servant.show();
                            }
                        } else {
                            waitDiv.style.display = "none";
                            handcard[0].style.left = "98px";
                            dui.layout.updateHand();
                            if (!txhj.servant.isPicture) {
                                txhj.servant.hide();
                            }
                        }
                    }
                    return btn;
                }

                if (shoushaUI.length > 0) {
                    var oneEle = shoushaUI[0].firstChild;
                    shoushaUI[0].insertBefore(createBtn(), oneEle);
                } else {
                    var btn = createBtn();
                    btn.classList.add("onlyBtn");
                    document.body.appendChild(btn);
                }
            }
            handcard[0].style.left = "245px";
            dui.layout.updateHand();
            // this.nowPlay.x = this.data.x;
            // this.nowPlay.y = this.data.y;
            if (this.isPicture && !this.zuoDian.picture) {
                var picture = new Image();
                picture.src = this.name;
                picture.classList.add("taixuhuanjing_matchPicture");
                this.zuoDian.picture = picture;
                this.zuoDian.appendChild(picture);
            } else {
                this.nowPlay.x = dui.isMobile() ? this.data.match.x : this.data.pc.match.x;
                this.nowPlay.y = dui.isMobile() ? this.data.match.y : this.data.pc.match.y;
                this.nowPlay.scale = dui.isMobile() ? this.data.match.scale : this.data.pc.match.scale;
                this.nowPlay.referNode = this.zuoDian;
                this.nowPlay.referFollow = true;
                setTimeout(() => {
                    txhj.servant.nowPlay.referFollow = false;
                }, 500);
            }
        };

        Servant.prototype.initSLSkill = function () {

        }

        Servant.prototype.hide = function () {
            if (this.nowPlay) {
                this.nowPlay.speed = 0;
                this.nowPlay.opacity = 0;
            }
        };

        Servant.prototype.show = function () {
            if (this.nowPlay) {
                this.nowPlay.speed = 1;
                this.nowPlay.opacity = 1;
            }
        };

        // Servant.prototype.getSuitableScale = function () {
        //     var scale = this.data.chooseServant.scale;
        //     if (dui.isMobile()) {
        //         return scale;
        //     } else {
        //         return scale*=1.4;
        //     }
        // }

        return Servant;
    }());

    txhj.servantData = servantData = {
        "servant": {
            "lulu": {
                textName: "鲁鲁",
                nickName: 'lulu',
                action: 'daiji1',
                loop: true,
                gjsj: 1900,
                yc: 300,
                match: {
                    x: undefined,
                    y: [0,0.24],
                    scale: 0.28,
                },
                chooseServant: {
                    x: undefined,
                    y: [0,0.1],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0,0.07],
                    scale: 0.3
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.18],
                        scale: 0.28,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.05],
                        scale: 0.35
                    },
                },
                grade: 2
            },
            "datong": {
                textName: "大桶",
                nickName: 'datong',
                match: {
                    x: undefined,
                    y: [0,0.18],
                    scale: 0.3,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1890,
                chooseServant: {
                    x: undefined,
                    y: [0,0.05],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0,0.01],
                    scale: 0.3
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.15],
                        scale: 0.32,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.02],
                        scale: 0.4
                    },
                },
                grade: 0
            },
            "ale": {
                textName: "阿乐",
                nickName: 'ale',
                match: {
                    x: undefined,
                    y: [0,0.21],
                    scale: 0.31,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1700,
                yc: 400,
                chooseServant: {
                    x: undefined,
                    y: [0,0.1],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0,0.05],
                    scale: 0.31
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.15],
                        scale: 0.32,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.02],
                        scale: 0.35
                    },
                },
                grade: 2
            },
            "rui": {
                textName: "瑞",
                nickName: 'rui',
                match: {
                    x: undefined,
                    y: [0, 0.18],
                    scale: 0.3,
                },
                action: 'daiji1',
                loop: true,
                py: {
                    zd: {
                        x: [0, 1.2],
                        y: [0, 0.01],
                    }
                },
                gjsj: 1100,
                yc: 500,
                chooseServant: {
                    x: [0, 0.5],
                    y: [0, 0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: 0,
                    scale: 0.3
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.14],
                        scale: 0.32,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.02],
                        scale: 0.35
                    },
                },
                grade: 3
            },
            "yueer": {
                textName: "玥儿",
                nickName: 'yueer',
                match: {
                    x: undefined,
                    y: [0,0.2],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 2300,
                yc: 500,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0,0.02],
                    scale: 0.25
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.15],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.02],
                        scale: 0.35
                    },
                },
                grade: 2
            },
            "yan": {
                textName: "焱",
                nickName: 'yan',
                match: {
                    x: undefined,
                    y: [0,0.25],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1500,
                chooseServant: {
                    x: undefined,
                    y: [0,0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0,0.08],
                    scale: 0.25
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.18],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.07],
                        scale: 0.3
                    },
                },
                grade: 3
            },
            "ahao": {
                textName: "阿豪",
                nickName: 'ahao',
                match: {
                    x: undefined,
                    y: [0, 0.25],
                    scale: 0.3,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0,0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0,0.1],
                    scale: 0.3
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.18],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.07],
                        scale: 0.3
                    },
                },
                grade: 3
            },
            "liuli": {
                textName: "琉璃",
                nickName: 'liuli',
                match: {
                    x: undefined,
                    y: [0, 0.65],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                py: {
                    gj: {
                        x: [0, 0.55],
                        y: [0, 0.5]
                    }
                },
                gjsj: 1900,
                yc: 400,
                chooseServant: {
                    x: undefined,
                    y: [0,0.75],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0,0.55],
                    scale: 0.25
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.5],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.7],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.52],
                        scale: 0.3
                    },
                },
                grade: 2,
                special: true
            },
            "manman": {
                textName: "蠻蠻",
                nickName: 'manman',
                match: {
                    x: undefined,
                    y: [0, 0.18],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: 0,
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: 0,
                    scale: 0.25
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.13],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.01],
                        scale: 0.35
                    },
                },
                grade: 2
            },
            "xiaoxiao": {
                textName: "枭枭",
                nickName: 'xiaoxiao',
                match: {
                    x: undefined,
                    y: [0, 0.19],
                    scale: 0.5,
                },
                action: 'daiji1',
                loop: true,
                div: {
                    width: "141",
                    height: "136",
                    left: "110",
                },
                HD: {
                    x: [0, 0.5],
                    y: [0, 0.01],
                },
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0,0.05],
                    scale: 1.2,
                },
                consoledesk: {
                    x: [0,0.55],
                    y: [0,0.01],
                    scale: 0.5
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.15],
                        scale: 0.6,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 1.2,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.01],
                        scale: 0.6
                    },
                },
                grade: 2
            },
            "xueren": {
                textName: "雪人",
                nickName: 'xueren',
                match: {
                    x: undefined,
                    y: [0,0.18],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0,0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: 0,
                    scale: 0.25
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.13],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.01],
                        scale: 0.35
                    },
                },
                grade: 0
            },
            "xuanwu": {
                textName: "玄武",
                nickName: 'xuanwu',
                match: {
                    x: undefined,
                    y: [0,0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0,0.1],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0,0.05],
                    scale: 0.25
                },
                pc: {
                    match : {
                        x: undefined,
                        y: [0,0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0,0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0,0.05],
                        scale: 0.3
                    },
                },
                grade: 3
            },
        },
        "action": {
            lulu: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true
            },
            datong: {
                daiji: 2,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 1,
                zuodian: false
            },
            yueer: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true
            },
            ale: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true
            },
            yan: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false
            },
            ahao: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false
            },
            rui: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true
            },
            liuli: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true
            },
            manman: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false
            },
            xiaoxiao: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false
            },
            xuanwu: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false
            },
            xueren: {
                daiji: 2,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 1,
                zuodian: false
            },
        },
        "skillDesc": {
            "lulu": {
                "txhj_luluSkill1": {
                    name: "如虎添翼",
                    desc: "出牌阶段开始时，你摸两张牌."
                },
                "txhj_luluSkill2": {
                    name: "虎威",
                    desc: "你于回合内使用第一张[杀]时，若你本回合获得牌数不小于x (x为你的当前体力值)，则你此[杀]不可响应且伤害+1."
                },
            },
            "datong": {
                "txhj_datongSkill1": {
                    name: "金鸡独立",
                    desc: "当你进入濒死状态时，你回复体力至1点 (每次对局限至多触发一次)."
                },
            },
            "ale": {
                "txhj_aleSkill1": {
                    name: "乐不可支",
                    desc: "当你于一个回合第一次成为一张基本牌的目标后，若此牌未对你造成伤害，你摸一张牌."
                },
                "txhj_aleSkill2": {
                    name: "饞嘴王",
                    desc: "准备阶段，若你已受伤且体力值不是全场最高，你回复1点体力."
                },
            },
            "rui": {
                "txhj_ruiSkill1": {
                    name: "祥云瑞氣",
                    desc: "出牌阶段结束时，你对手牌数小于你的敌方角色造成1点火焰伤害."
                },
                "txhj_ruiSkill2": {
                    name: "神妙",
                    desc: "准备阶段和结束阶段，若你的手牌数为奇数，你令随机一个我方角色摸一张牌；若手牌数为偶数，你令随机一个敌方角色随机弃一张牌."
                },
                "txhj_ruiSkill3": {
                    name: "洞若观火",
                    desc: "当你成为其他角色使用的普通锦囊牌的目标时，你进行判定：若为红色，则此锦囊无效且你获得之."
                },
            },
            "yueer": {
                "txhj_yueerSkill1": {
                    name: "花容月貌",
                    desc: "每轮限一次，当男性角色受到伤害后，你回复一点体力并摸一张牌."
                },
                "txhj_yueerSkill2": {
                    name: "娇面",
                    desc: "弃牌阶段结束时，你摸两张牌."
                },
            },
            "yan": {
                "txhj_yanSkill1": {
                    name: "神鬼不测",
                    desc: "当你成为其他角色使用的普通锦囊的唯一目标时，你进行判定：若为黑色，则改为你对使用者使用该锦囊."
                },
                "txhj_yanSkill2": {
                    name: "反计",
                    desc: "每回合限一次，当你受到其他角色的伤害后，你视为对伤害来源使用一张杀，若该杀造成伤害，则你回复1点体力."
                },
                "txhj_yanSkill3": {
                    name: "天外之火",
                    desc: "每回合限一次，当你对其他角色造成伤害后，进行一次判定：黑色你获得其一张牌，红色你摸两张牌."
                },
            },
            "ahao": {
                "txhj_aHaoSkill1": {
                    name: "豪门贵胄",
                    desc: "每场战斗结束时，你获得1件随机装备."
                },
                "txhj_aHaoSkill2": {
                    name: "神勇",
                    desc: "每当你在牌局内失去装备时对所有敌人造成1点伤害."
                },
                "txhj_aHaoSkill3": {
                    name: "攫戾執猛",
                    desc: "回合开始时，你摸牌阶段摸牌数、出杀次数、手牌上限+x (x为装备区的装备数)."
                },
            },
            "liuli": {
                "txhj_liuliSkill1": {
                    name: "墨玉点雪",
                    desc: "其他角色的回合限一次，当你失去牌时，对当前回合角色造成1点伤害."
                },
                "txhj_liuliSkill2": {
                    name: "伶俐",
                    desc: "每回合限一次，其他角色在弃牌阶段弃牌后，你从弃牌堆获得一张牌."
                },
            },
            "manman": {
                "txhj_manmanSkill1": {
                    name: "弄鬼掉猴",
                    desc: "回合开始时，你视为使用一张【南蛮入侵】;【南蛮入侵】每造成1点伤害你摸1张牌."
                },
                "txhj_manmanSkill2": {
                    name: "捣蛋",
                    desc: "每回合限一次，当你对其他角色造成伤害后，你随机获得其一张牌."
                },
            },
            "xiaoxiao": {
                "txhj_xiaoxiaoSkill1": {
                    name: "矢无虚发",
                    desc: "每回合限一次，当你成为其他角色使用普通锦囊牌的目标后，若你没有受到伤害，则你回复1点体力（若体力已满则改为摸一张牌）。"
                },
                "txhj_xiaoxiaoSkill2": {
                    name: "弓上弦",
                    desc: "弃牌阶段结束时，你从每名装备区装备数不大于你的其他角色处随机获得1张手牌."
                }
            },
            "xueren": {
                "txhj_xuerenSkill1": {
                    name: "轻舞飞扬",
                    desc: "回合结束时，若你本回合造成过伤害，你摸一张牌."
                },
            },
            "xuanwu": {
                "txhj_xuanwuSkill1": {
                    name: "倚天拔地",
                    desc: "当其他角色回复体力时，你回复1点体力."
                },
                "txhj_xuanwuSkill2": {
                    name: "蛇影",
                    desc: "每回合限一次，当你弃置手牌或手牌被弃置时，你随机对X名敌方角色造成1点伤害并摸X张牌。（X为你本次弃置手牌数除以2向上取整）"
                },
                "txhj_xuanwuSkill3": {
                    name: "玄冥真主",
                    desc: "当其他角色使用锦囊牌指定你为目标时，若该牌点数小于等于你的手牌数，则该锦囊无效。"
                }
            }
        },
        createServantIconList: function (ele) {
            var data = servantData.servant;
            var keys = Object.keys(data)
            for (var i = 0; i < keys.length; i++) {
                var div = ui.create.div('.taixuhuanjing_servantSelectIcon', ele);
                var img = new Image(88, 88);
                img.classList.add("taixuhuanjing_servantSelectIcon_img");
                img.src = txhjPack.path + '/image/servant/icon/' + keys[i] + '.png';
                div.appendChild(img);
                img.onerror = function () {
                    console.warn("Servant icon not found: " + keys[i]);
                    this.onerror = null;
                }
                img.servantName = keys[i];
                img.onclick = function (ev) {
                    // console.log(this.servantName);
                    if (this.servantName == txhj.servant.nickName) return;
                    txhj.servant.nickName = this.servantName;
                    txhj.servant.setData();
                    txhj.servant.chooseingPlay(txhj.sldiv, true);
                    txhj.updateSLDesc(txhj.descDiv)
                }
                div.classList.add("frame" + data[keys[i]].grade);
            }
        }
    }
    return {};
});