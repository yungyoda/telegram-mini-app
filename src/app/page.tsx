"use client";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import vemeIcon from "@public/alphalogo.png";
import { shortenAddress } from "thirdweb/utils";
import { Button } from "@headlessui/react";
import { client, wallet } from "./constants";
import { AutoConnect } from "thirdweb/react";
import Link from "next/link";


export default function Home() {
  const account = useActiveAccount();

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto relative">
      {/* <div className="absolute inset-0 z-0">
        <iframe src="data:text/
html;base64,PGh0bWw+CiAgICAgICAgPGhlYWQ+CiAgICAgICAgICAgIDxtZXRhI
G5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGlu
aXRpYWwtc2NhbGU9MSI+CiAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgI
CAgIGh0bWwsIGJvZHl7CiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogI
CAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICAgIC
Agd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO
wogICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDsKICAgICAgICAgICAgICAgIH0
KICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgPHNjcmlwdCB0eXBlPSJp
bXBvcnRtYXAiPgp7CiAgICAiaW1wb3J0cyI6IHsKICAgICAgICAicmVhY3QiOiAiaH
R0cHM6Ly9jZG4uc2t5cGFjay5kZXYvcmVhY3RAMTguMC4yIiwKICAgICAgICAic
mVhY3QtZG9tIjogImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUA
xOC4wLjIiLAogICAgICAgICJ0aHJlZSI6ICJodHRwczovL2Nkbi5za3lwYWNrLmRld
i90aHJlZUAwLjE0OC4wIiwKICAgICAgICAicmVhY3QtdGhyZWUvZmliZXIiOiAiaH
R0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4
yNCIKICAgIH0KfQo8L3NjcmlwdD4KPHN0eWxlPgogICAgaHRtbCwgYm9keXsKI
CAgICAgICBtYXJnaW46IDA7CiAgICAgICAgcGFkZGluZzogMDsKICAgICAgICB3a
WR0aDogMTAwJTsKICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgYm9yZG
VyOiAwOwogICAgfQogICAgLm50LWVtYmVkewogICAgICAgIHdpZHRoOiAxMDAl
OwogICAgICAgIGhlaWdodDogMTAwJTsKICAgIH0KICAgIC5udC1lbWJlZCBjYW52
YXN7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOw
ogICAgfQo8L3N0eWxlPgo8c2NyaXB0IHR5cGU9Im1vZHVsZSI+CiAgICBpbXBvc
nQgUmVhY3QsIHt1c2VSZWYsdXNlTWVtb30gZnJvbSAncmVhY3QnOwogICAga
W1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7CiAgICBpbXBvcnQgKiB
hcyBUSFJFRSBmcm9tICd0aHJlZSc7CiAgICBpbXBvcnQge0NhbnZhcywgdXNlR
nJhbWUsIHVzZVRocmVlfSBmcm9tICdyZWFjdC10aHJlZS9maWJlcic7CgogICAg
bGV0IGVtYmVkUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Rpdicp
OwogICAgZW1iZWRSb290LmNsYXNzTmFtZSA9ICJudC1lbWJlZCI7CiAgICBkb2
N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVtYmVkUm9vdCk7CgogICAgY29uc
3QgVGV4dHVyZU1lc2ggPSAoKSA9PiB7CiAgICAgICAgY29uc3QgbWVzaCA9IHV
zZVJlZihudWxsKQogICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAg
ICAgY29uc3QgeyBjbG9jaywgbW91c2UsIGdsLCBzY2VuZSwgY2FtZXJhIH0gPSB
zdGF0ZQogICAgICAgICAgICBpZihtZXNoLmN1cnJlbnQpewogICAgICAgICAgICA
gICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmF
sdWUgPSBbbW91c2UueCAvIDIgKyAwLjUsIG1vdXNlLnkgLyAyICsgMC41XQogIC
AgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVf
dGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkKICAgICAgICAgICA
gICAgIGxldCBjID0gZ2wuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3
QoKQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZ
vcm1zLnVfcmVzb2x1dGlvbi52YWx1ZSA9IFtjLndpZHRoLGMuaGVpZ2h0XQogIC
AgICAgICAgICB9CiAgICAgICAgfSkKICAgICAgICAKICAgICAgICByZXR1cm4gUmV
hY3QuY3JlYXRlRWxlbWVudCgnbWVzaCcsCiAgICAgICAgICAgIHsKICAgICAgICA
gICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAs
MF0sCiAgICAgICAgICAgICAgICBzY2FsZTogMSwKICAgICAgICAgICAgICAgIHJvd
GF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIFJlYWN0
LmNyZWF0ZUVsZW1lbnQoJ3BsYW5lR2VvbWV0cnknLHthcmdzOlsyNDAsNTgw
XX0pLCAKICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2hhZGVyT
WF0ZXJpYWwnLHsKICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgCi
8vIFVOSUZPUk1TCnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247CnVuaWZvcm0
gdmVjMiB1X21vdXNlOwp1bmlmb3JtIGZsb2F0IHVfdGltZTsKdW5pZm9ybSB2Z
WMzIHVfY29sb3JzWzRdOwp1bmlmb3JtIGludCB1X2xheWVyczsgLy9taW46MS
wgbWF4OjIwCnVuaWZvcm0gZmxvYXQgdV9zY2FsZTsgLy91bml0czolCgoKbWF
0MiByb2F0KGZsb2F0IGEpewogIGZsb2F0IHMgPSBzaW4oYSk7CiAgZmxvYXQg
YyA9IGNvcyhhKTsKICByZXR1cm4gbWF0MihjLCAtcywgcywgYyk7Cn0KCmZsb2
F0IFN0YXIodmVjMiB1diwgZmxvYXQgZmxhcmUpewogIAogIGZsb2F0IGQgPSBs
ZW5ndGgodXYpOwogIGZsb2F0IG0gPSAuMDUvZDsKICAKICAKICBmbG9hdCB
yYXlzID0gbWF4KDAuLCAxLiAtIGFicyh1di54ICogdXYueSAqIDEwMDAuKSk7CiAg
bSArPSByYXlzKmZsYXJlOwogIAogIHV2ICo9IHJvYXQoMy4xNDUvNC4pOwogIA
ogIHJheXMgPSBtYXgoMC4sIDEuIC0gYWJzKHV2LnggKiB1di55ICogMTAwMC4
pKTsKICBtICs9IHJheXMgKi4zKmZsYXJlOwogIAogIG0gKj0gc21vb3Roc3RlcCgx
LiwgLjIsIGQpOwogIHJldHVybiBtOwp9CiAgICAKZmxvYXQgSGFzaDIxKHZlYzIgc
Cl7CiAgcCA9IGZyYWN0KHAqIHZlYzIoMTIzLjM0LCA0NTYuMjEpKTsKICBwICs9I
GRvdChwLCBwKzQ1LjMyKTsKICAKICByZXR1cm4gZnJhY3QocC54KnAueSk7Cn
0KCnZlYzMgU3RhckxheWVyKHZlYzIgdXYsIHZlYzMgYzEpewogIHZlYzMgY29sI
D0gdmVjMygwKTsKICAKICB2ZWMyIGd2ID0gZnJhY3QodXYpLS41OwogIAogIA
ogIC8vIGNvbC5yZyA9IGd2OwogIAogIHZlYzIgaWQgPSBmbG9vcih1dik7CiAgCiA
gZm9yKGludCB5PS0xOyB5PD0xOyB5KyspewogICAgZm9yKGludCB4PS0xOyB
4PD0xOyB4KyspewogICAgICB2ZWMyIG9mZnMgPSB2ZWMyKHgseSk7CiAgICA
gIAogICAgICBmbG9hdCBuID0gSGFzaDIxKGlkK29mZnMpOwogICAgICAvLyBjb2
wgKz0gU3Rhcihndi1vZmZzLXZlYzIobiwgZnJhY3QobiozNC4pKSsuNSwgMS4p
OwogICAgICBmbG9hdCBzaXplID0gZnJhY3QobiAqIDEzNDUuMzIpOwogICAgIC
BmbG9hdCBzdGFyID0gU3Rhcihndi1vZmZzLXZlYzIobiwgZnJhY3QobiozNC4pK
SsuNSwgc21vb3Roc3RlcCguOSwgMS4sIHNpemUpKi42KTsKICAgICAgCiAgICA
gIC8vIHZlYzMgY29sb3IgPSBzaW4odmVjMyguMiwuMywuOSkqdV90aW1lKTsKI
CAgICAgdmVjMyBjb2xvciA9IHNpbihjMSpmcmFjdChuKjIzNDUuMikqMTIuMjgzK
SouNSsuNTsKICAgICAgCiAgICAgIGNvbG9yID0gY29sb3IqdmVjMygxLiwuNSwxL
itzaXplKTsKICAgICAgc3RhciAqPSBzaW4odV90aW1lKjMuK24qNi4zMjMpKi41Kz
EuOwogICAgICBjb2wgKz0gc3RhcipzaXplKmMxOwogICAgfSAgCiAgfQogIHJldH
VybiBjb2w7Cn0Kdm9pZCBtYWluKCkgewogIHZlYzIgdXYgPSAoZ2xfRnJhZ0Nvb
3JkLnh5IC0gLjUgKiB1X3Jlc29sdXRpb24ueHkpL3VfcmVzb2x1dGlvbi55OwogIA
ogIHZlYzIgTSA9ICh1X21vdXNlLnh5IC0gdV9yZXNvbHV0aW9uLnh5Ki41KS91X3
Jlc29sdXRpb24ueTsKICAKICB1dio9KDMuKigxLjAtdV9zY2FsZSkpLS41OwogIAo
gIGZsb2F0IHQgPSB1X3RpbWUqLjA1OyAKICB1diAqPSByb2F0KHQpOwoKICB2Z
WMzIGNvbCA9IHZlYzMoMCk7CiAgCiAgZm9yKGZsb2F0IGk9MC47IGk8ZmxvY
XQodV9sYXllcnMpOyBpKz0xLil7CiAgICB2ZWMzIGMgPSB1X2NvbG9yc1tpbnQo
bW9kKGZsb2F0KGkpLGZsb2F0KHVfY29sb3JzLmxlbmd0aCgpKSkpXTsKICAgI
GZsb2F0IGRlcHRoID0gZnJhY3QoaS9mbG9hdCh1X2xheWVycykrdCk7CiAgICB
mbG9hdCBzY2FsZSA9IG1peCgyMC4sIC41LCBkZXB0aCk7CiAgICBmbG9hdCB
mYWRlID0gZGVwdGgqc21vb3Roc3RlcCgxLiwgLjksIGRlcHRoKTsKICAgIGNvbCs
9IFN0YXJMYXllcih1dipzY2FsZStpKjQ1NS4yLGMpICpmYWRlOwogIH0KICAKICA
KICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbCwxLjApOwp9YCwKICAgICAgICA
gICAgICAgIHZlcnRleFNoYWRlcjogYAogICAgICAgICAgICB2b2lkIG1haW4oKSB7Ci
AgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKi
Btb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApOwogICAgICAg
IH1gLAogICAgICAgICAgICAgICAgdW5pZm9ybXM6IHt1X2NvbG9yczoge3ZhbHV
lOiBbbmV3IFRIUkVFLlZlY3RvcjQoMC42NzA1ODgyMzUyOTQxMTc2LDAuMDA3
ODQzMTM3MjU0OTAxOTYsMC4yOTQxMTc2NDcwNTg4MjM1NCwxKSxuZXcgV
EhSRUUuVmVjdG9yNCgwLjg5MDE5NjA3ODQzMTM3MjUsMC45MDk4MDM5Mj
E1Njg2Mjc0LDAuMjA3ODQzMTM3MjU0OTAxOTcsMSksbmV3IFRIUkVFLlZlY3Rv
cjQoMC4zMDk4MDM5MjE1Njg2Mjc0NiwwLjA3MDU4ODIzNTI5NDExNzY1LDAu
NDcwNTg4MjM1Mjk0MTE3NjQsMSksbmV3IFRIUkVFLlZlY3RvcjQoMC45MjE1Nj
g2Mjc0NTA5ODAzLDAuNDAzOTIxNTY4NjI3NDUxLDAuMDIzNTI5NDExNzY0NzA
1ODgyLDEpXX0sdV9sYXllcnM6IHt2YWx1ZTogNn0sdV9zY2FsZToge3ZhbHVlOi
AwLjkzMn0sdV90aW1lOiB7dmFsdWU6IDB9LHVfbW91c2U6IHt2YWx1ZTogWzA
sMF19LHVfcmVzb2x1dGlvbjoge3ZhbHVlOiBbMjQwLDU4MF19fSwKICAgICAgIC
AgICAgICAgIHdpcmVmcmFtZTogZmFsc2UsIAogICAgICAgICAgICAgICAgd2lyZW
ZyYW1lTGluZXdpZHRoOiAwLAogICAgICAgICAgICAgICAgZGl0aGVyaW5nOiBmY
WxzZSwKICAgICAgICAgICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlLAogICAgICAgI
CAgICAgICAgZG91YmxlU2lkZWQ6IHRydWUsCiAgICAgICAgICAgICAgICBnbHNs
VmVyc2lvbjogIjEwMCIKICAgICAgICAgICAgfSkKICAgICAgICApOyAgCiAgICB9Cg
ogICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2Fud
mFzLHsKICAgICAgICAgICAgZ2w6IHsKICAgICAgICAgICAgICAgIHByZXNlcnZlRH
Jhd2luZ0J1ZmZlcjogdHJ1ZSwKICAgICAgICAgICAgICAgIHByZW11bHRpcGxpZW
RBbHBoYTogZmFsc2UsCiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZSwKICAgI
CAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLAogICAgICAgICAgICAgICAgY
W50aWFsaWFzOiB0cnVlLAogICAgICAgICAgICAgICAgcHJlY2lzaW9uOiAiaGlnaH
AiLAogICAgICAgICAgICAgICAgcG93ZXJQcmVmZXJlbmNlOiAiaGlnaC1wZXJmb
3JtYW5jZSIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgcmVzaXplOnsKICAgICA
gICAgICAgICAgIGRlYm91bmNlOiAwLAogICAgICAgICAgICAgICAgc2Nyb2xsOiBm
YWxzZSwKICAgICAgICAgICAgICAgIG9mZnNldFNpemU6IHRydWUKICAgICAgIC
AgICAgfSwKICAgICAgICAgICAgZHByOiAxLAogICAgICAgICAgICBjYW1lcmE6IHs
KICAgICAgICAgICAgICAgIGZvdjogNzUsCiAgICAgICAgICAgICAgICBuZWFyOiAwL
jEsCiAgICAgICAgICAgICAgICBmYXI6IDEwMDAsCiAgICAgICAgICAgICAgICBwb3
NpdGlvbjogWzAsMCw1XQogICAgICAgICAgICB9LAogICAgICAgICAgICBzdHlsZT
p7IGhlaWdodDogIjEwMCUiLCB3aWR0aDogIjEwMCUiIH0KICAgICAgICB9LAogIC
AgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dHVyZU1lc2gpICAgICAgICAgI
CAgICAgICAgICAgICAgICAgCiAgICApLCBlbWJlZFJvb3QpOwo8L3NjcmlwdD4KI
CAgICAgICA8L2hlYWQ+CiAgICAgICAgPGJvZHk+CjwhLS0gQVNTRVQgTk9UIEl
OTElORUQ6IGFzc2V0cy9ib29rLjVmYjExYjhkLnN2ZyAtLT4KCjwhLS0gQVNTRVQ
gTk9UIElOTElORUQ6IGFzc2V0cy9seWdpYS5mNzQ5MDU5NC5zdmcgLS0+Cgo
8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvb3ZlcmZsb3cuOGQ1MDQxN
WQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL3Ry
YXNoLjUyNGRiY2QzLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IG
Fzc2V0cy92ZXJ0aWNhbC45MDYxMDg0OS5zdmcgLS0+Cgo8IS0tIEFTU0VUIE
5PVCBJTkxJTkVEOiBhc3NldHMvaG9yaXpvbnRhbC40NGY3NzFmOC5zdmcgLS
0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvYWRkLmE1NTI0MGRk
LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9zaWcuOD
UwYTg1ZTcuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZX
RzL21pbnVzLjFlMWEwYWJkLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElO
RUQ6IGFzc2V0cy9lZmZlY3QuNDU1NzI0M2Yuc3ZnIC0tPgoKPCEtLSBBU1NFVC
BOT1QgSU5MSU5FRDogYXNzZXRzL3Zpc2libGUuYzZkNGUxYzAuc3ZnIC0tPgo
KPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2hpZGRlbi41YTRmYzI
1NC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvd29ya2
VyLmI3NjFmYjExLmpzIC0tPgo8L2JvZHk+CiAgICAgICAgPC9odG1sPg=="
          style={{ border: 0, margin: 0, width: '100%', height: '100%' }} />
      </div> */}
      <div className="py-20 relative z-10">
        <Header />
        {/* conditionally connect to the wallet */}
        <AutoConnect client={client} wallets={[wallet]} />
        <div className="flex justify-center mb-20">
          {account ?
            (
              <>
                <Button onClick={() => (window as any).Telegram.WebApp.openLink(`https://veme.com`)} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">All Set! Your Whitelisted Account: {shortenAddress(account.address)}</Button>
              </>
            )
            : (
              <p className="text-sm text-zinc-400">Smart Account Not Connected</p>
            )}
        </div>

        {/* <Menu /> */}
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={vemeIcon}
        alt=""
        // className="size-[250px] md:size-[250px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        {/* Veme Alpha Whitelist */}
        <span className="text-zinc-300 inline-block mx-1"> + </span>
        <span className="inline-block text-blue-500"> Telegram </span>
      </h1>

      {/* <p className="text-zinc-300 text-base">
        Read the{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          README.md
        </code>{" "}
        file to get started.
      </p> */}
    </header>
  );
}

function Menu() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <MenuItem
        title="Sponsored transactions"
        href="/gasless"
        description="Execute transactions without requiring users to hold ETH."
      />
      <MenuItem
        title="Pay"
        href="/pay"
        description="Allow users to purchase NFT's using fiat"
      />
    </div>
  );
}

function MenuItem(props: { title: string; href: string; description: string }) {
  return (
    <Link
      href={props.href}
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </Link>
  );
}

