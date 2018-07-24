Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.config = {
    app_name: "猜画小歌",
    app_title: "猜画小歌",
    handwriting_threshold: 4,
    handwriting_recognition_threshold: 4,
    round_length: 20,
    count_down_length: 5,
    vs_round_countdown: 3,
    num_rounds: 6,
    tutorial_round_threshold: 3,
    max_api_rate: 1,
    rpc_perf_sample_rate: 10,
    rpc_default_timeout_period: 1e4,
    rpc_max_retry_count: 2,
    successSentences: [ "猜出来了！这是", "我知道了！这是" ],
    noNewGuessesSentences: [ "你画的啥玩意儿", "再加把劲", "我真的看不懂", "我就快猜出来了" ],
    userNotDrawingSentences: [ "抓紧时间画画呀！", "你开始画我才能猜啊..." ],
    levelNames: [ "画室学徒", "画室学徒", "画室学徒", "画室学徒", "画室学徒", "画圈新贵", "画圈新贵", "画圈新贵", "画圈新贵", "画圈新贵", "一代画师", "一代画师", "一代画师", "一代画师", "一代画师", "神笔马良", "神笔马良", "神笔马良", "神笔马良", "神笔马良" ],
    shareTemplates: {
        common_1: "世界级的天才都在跟AI玩猜画",
        common_2: "每天画一画，AI更懂你",
        common_3: "和AI一起定义2018年的最炫画风！",
        endgame_1: "世界级的天才都在跟AI玩猜画",
        endgame_2: "每天画一画，AI更懂你",
        endgame_3: "和AI一起定义2018年的最炫画风！",
        endgame_4: "看我出神入化的画作，小歌一口气猜中{}张！",
        endgame_5: "小歌猜中{}张，你能超过我算我输！",
        endgame_6: "小歌一口气猜出了{}张我的画作，你也来试一试？",
        endgame_7: "小歌说，见过厉害的，没见过我这么厉害的！",
        single_success_1: "一代画师就是我，来看我画的...",
        single_success_2: "我画的{}可爱不？",
        single_success_3: "AI这也能看懂，厉害了我的歌！",
        single_fail_1: "大家来评评理，我画的是不是...",
        single_fail_2: "道理我都懂，但我就是画不出来啊",
        single_fail_3: "我画的这么可爱AI都猜不出来"
    },
    shareTemplateCommon: [ "common_1", "common_2", "common_3" ],
    shareTemplateEndGame: [ "endgame_1", "endgame_2", "endgame_3", "endgame_4", "endgame_5", "endgame_6", "endgame_7" ],
    shareTemplateSingleDrawingSuccess: [ "single_success_1", "single_success_2", "single_success_3" ],
    shareTemplateSingleDrawingFail: [ "single_fail_1", "single_fail_2", "single_fail_3" ],
    start_pages: [ "pages/home/home", "pages/challenge/challenge", "pages/singleImageInvitation/singleImageInvitation" ],
    client_version: "1.0.1"
};