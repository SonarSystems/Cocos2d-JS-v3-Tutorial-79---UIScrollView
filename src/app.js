var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var scrollView = new ccui.ScrollView();
        scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        scrollView.setTouchEnabled(true);
        scrollView.setBounceEnabled(true);
        scrollView.setBackGroundImage(res.HelloWorld_png);
        scrollView.setContentSize(cc.size(300, 200));
        scrollView.setInnerContainerSize(cc.size(1280, 2500));
        scrollView.setAnchorPoint(cc.p(0.5, 0.5));
        scrollView.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(scrollView);

        for (var i = 0; i < 50; i++)
        {
            var button = new ccui.Button();
            button.setTouchEnabled();
            button.setPosition(cc.p(scrollView.width / 2, i * 50));
            button.loadTextures(res.CloseNormal_png, res.CloseSelected_png, "");
            scrollView.addChild(button);
        }

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

