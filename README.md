# Wetube Reloaded

# global router 홈에서 바로 갈 수 있는 페이지를 담고 있다

# 원래 라우터 논리대로라면 /users/join /users/login이 맞음 하지만 몇 가지 예외 사항이 있을 수 있으며, 이는 url을 보다 간결하고 이쁘게 만들면서 쉽게 마케팅하기 위해 몇 가지는 예외로 둘 수도 있음.

/ -> Home
/join -> Join
/login -> Login
/search -> Search

# users router

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile

# videos router

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video

# 라우터란 /delete-video /edit-video가 아닌 각 url을 그룹화해서 정리할 수 있게 도와준다. /video/delete /video/edit 처럼
