# Class 061021
## Github, Git Bash, Linux basic comandas

```
Basic writing and formatting syntax
```
Github formatēšana [docs.github.com](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

```
Basic Linux commands
```
Basic linux komandas [www.hostinger.com/tutorials/linux-commands](https://www.hostinger.com/tutorials/linux-commands).


* whoami {kas es esmu}
* pwd {kur es esmu}
* ls {list}
  * ls-l {list details}
    * ls-a {list all (hidden)}
      * ls -lta {visu rādīt}
        * ls -lt {skatīties kādas mapes ar timestamp, sakārtots no jaunākās}
          * ls Dektop (mapes nosaukums) {skatīties konkrētā mapē. Pilns ceļš ls -l /c/users/pmaziks/Desktop}
 * Man -ls(komanda) {Helps par komandu}
   * ls(komanda) –help {Helps par komandu}
 * Ctrl l {clear screen}
 * cd {mainīt direktoriju}
   * cd .. {pacelties 1 līmeni augstāk}
 * mkdir class_09 {izveidot mapi aktīvajā direktorijā(mape class_09)}
 * history {skatīt darbību vēsturi}
 Nano test1.log  {ieiet texta redaktorā un izveido norādīto failu. Ctrl+O – saglabāt failā. Ctrl+X – saglabāt un iziet. [cat] test1.log – aplūkot txt faila saturu.}
 * ./ {aktīvā direktorija)
 * ../ {1 līmeni augstāk)
 * cd /c/users/pmaziks/mācības/DialogsJSPP/20210915/index.html ./class_09 {kopēt ar komandrindu}

* git clone https://github.com/PeterisMA/DialogsAB_JS {nokopē lokāli Github repozatoriju. Var nokopēt jebkuru publisku repozatoriju}

```
Upload to GitHub
```
Upload to GitHub via Git Bash [docs.github.co](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git).

***Uploads uz Github kursa laikā:***


pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git config --global user.name "peterisMA"

pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git add .

pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git commit -m "upload from cli test"
[main f532102] upload from cli test
 Committer: peterisMA <peteris.maziks@sadalestikls.lv>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 3 insertions(+)
 create mode 100644 class_08/index.html

pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git config -- global user.email pecis1979@gmail.com
error: key does not contain a section: global

pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git config --global user.email pecis1979@gmail.com

pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git add .

pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git commit -m "upload from cli test"
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git push -u origin main
fatal: helper error (-1073741510): Unknown

pmaziks@KVP-33328 MINGW64 ~/desktop/DialogsAB_JS (main)
$ git push -u origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 358 bytes | 59.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/PeterisMA/DialogsAB_JS
   7e5f94b..f532102  main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
