# oak

https://deno.land/x/oak



```bash
deno version 
# deno 1.30.3 
# v8 10.9.194.5
# typescript 4.9.4


# 프로젝트 실행
deno run --import-map=import_map.json -A app.ts
or
deno task start


# + 플래시 서버
deno run --unstable -A app.ts


# + denon 
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
denon run app.ts


# + prisma 
deno run -A npm:prisma init


# + lint 
deno lint app.ts  
deno lint 
```



**권한 옵션**
```
--allow-env
--allow-hrtime
--allow-net
--allow-ffi
--allow-read
--allow-run
--allow-write
```


**log level** 
```
NOTSET = 0, 
DEBUG = 10, 
INFO = 20, 
WARNING = 30, 
ERROR = 40, 
CRITICAL = 50, 
```  