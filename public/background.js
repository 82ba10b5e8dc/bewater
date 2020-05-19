window.browser = window.browser || window.chrome

function handleAlarm(alarmInfo) {
  console.log("on alarm: " + alarmInfo.name);

  window.browser.notifications.create({
    type: 'basic',
    title: 'drink water!',
    message: 'im reminding you to drink water'
  })
}

window.browser.alarms.onAlarm.addListener(handleAlarm);

window.browser.runtime.onInstalled.addListener(function() {
  window.browser.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});
