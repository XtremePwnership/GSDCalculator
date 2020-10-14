set /p commit_msg="Commit message: "
git add .
IF "%commit_msg%" == "" (git commit -m "whateva") ELSE (git commit -m "%commit_msg%")
git push origin main
PAUSE