var mtdict = {
  "zh-TW":
    {
      "auth-diglog-button": "驗證",
      "auth-diglog-body": "你必須要先驗證Google帳戶才能編輯這個行事曆",
      "auth-diglog-title": "驗證你的Google帳戶",
      "new_event": "新增事件",
      "table_action": "動作",
      "table_summary": "摘要",
      "cal_name": "日曆名稱",
      "cal_timezone": "此日曆時區",
      "msg_time": "以下已轉換為本地時間",
      "event_list": "事件列表",
      "table_start_time": "開始時間",
      "table_end_time": "結束時間",
      "table_duration": "持續",
      "table_left": "距離該活動剩下",
      "new_event-dialog-title": "新增事件",
      "new_event-dialog-time-msg": "以下時間使用該日曆時區",
      "new_event-dialog-summary": "摘要",
      "new_event-dialog-allday": "整天",
      "new_event-dialog-allday-checkbox": "是",
      "new_event-dialog-start-time": "開始時間",
      "new_event-dialog-end-time": "結束時間",
      "new_event-dialog-detail": "詳細內容",
      "new_event-dialog-cancel": "取消",
      "new_event-dialog-add": "新增事件"
    },
  "en-US":
    {
      "auth-diglog-button": "Authorize",
      "auth-diglog-body": "You need to sign in to edit the calendar",
      "auth-diglog-title": "Authorize",
      "new_event": "Add a new event",
      "table_action": "Action",
      "table_summary": "Summary",
      "cal_name": "Calendar Name",
      "cal_timezone": "Timezone of Calendar",
      "msg_time": "The following date time has been converted to your local timezone.",
      "event_list": "Event List",
      "table_start_time": "Start Time",
      "table_end_time": "End Time",
      "table_duration": "Duration",
      "table_left": "Left",
      "new_event-dialog-title": "Add a new event",
      "new_event-dialog-time-msg": "再說",
      "new_event-dialog-summary": "Summary",
      "new_event-dialog-allday": "Is all day event?",
      "new_event-dialog-allday-checkbox": "Yes",
      "new_event-dialog-start-time": "Start Time",
      "new_event-dialog-end-time": "End Time",
      "new_event-dialog-detail": "Detail",
      "new_event-dialog-cancel": "Cancel",
      "new_event-dialog-add": "Add"
    }
};

var lang = window.navigator.language;
if (mtdict[lang] == undefined){
    lang = 'en-US';
}
switchLang(lang)

function mt(e) {
  var v = dict[e];
  return (v===undefined)?e:v;
}

function switchLang(pLang) {
  lang = pLang;
  dict = mtdict[lang];
  $( "[data-lang]" ).each(function() {
      var e = $(this).data("lang");
      if ($(this).attr("placeholder") === undefined) {
            $(this).text(mt(e));
          } else {
                $(this).attr("placeholder", mt(e));
              }
    });
}


