---
sidebar_position: 3
---

# 1.1 | Script Engine | Abilities

## Abilities of Script Engine

The HollowEngine scripting engine itself adds a few annotations to scripts for ease of development, these are the main ones.

**AVAILABLE SINCE v1.1!!!**

Annotation `@Import("path/to/my/script.type.kts")` grants you to import any script from `hollowengine` directory

It is used quite simply, imagine we have two scripts in the hollow script folder: `test.se.kts` and `test_library.kts`. 
Where the first is a plot event, the second is a library with various methods that simplify your life :) 
And in order to allow using methods from the second in the first script, you need to use this annotation for the file (script): 
`@file:Import("test_library.kts")`

Also, if you have a script in one folder and a library in another, for example, `hollowengine/scripts/story/test.se.kts` 
and `hollowengine/libs/test_library.kts`, then specify the path relative to the `hollowengine` 
root folder: `@file:Import("libs/test_library.kts")`

## Run after an end script

**ONLY FOR STORY EVENTS!**

Annotation `@StartAfter("path/to/script.kts")` allows you to set after which event the script will be started.
The file path is specified as above.