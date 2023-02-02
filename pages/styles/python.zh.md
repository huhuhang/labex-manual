# Python 风格统一性规范

> 为确保 Python 方向实验和挑战的风格统一性，LabEx 确定了以下规范，请参考使用。

## 挑战

- 参考模板：[python/challenge-arithmetic-games](https://github.com/labex-labs/labex-candidate/tree/master/python/challenge-arithmetic-games)

### 基础代码文件

1. 尽量给用户提供基础代码文件，而不是让用户自行创建文件。特殊情况除外。
2. 命名为全小写，空格用下划线分隔，如：`sum_of_cubes.py`。
3. 基础代码文件中的函数名、变量名、类名等书写规范，需要包含 Type Hints 和 Docstring。
4. Python 挑战尽量不要直接在 `verify.sh` 中使用 Shell 编写测试，而是使用 `unittest` 编写规范的单元测试用例。
5. 基础代码文件中的函数尽量使用 `return` 返回结果，方便使用 `unittest` 编写规范的单元测试用例。
6. 当存在规范的单元测试用例时，可以配置 `"showstderr": true`，以便在测试失败时显示详细的错误信息，方便用户 Debug。
7. 基础代码文件存放在 `assets` 目录中，通过在 `index.json` 中配置 [`assets` 字段](/basic/how-to-start#assets-配置) 复制到环境用户目录。

### 单元测试用例

1. 请使用 `unittest` 编写规范的单元测试用例，可以学习和参考 [exercism/python](https://github.com/exercism/python/tree/main/exercises/practice)。
2. 单元测试用例文件和基础代码文件一一对应，以 `_test`结尾。
3. 命名为全小写，空格用下划线分隔，如：`sum_of_cubes_test.py`。
4. 单元测试用例文件存放在 `assets` 目录中，通过在 `index.json` 中配置 [`assets` 字段](/basic/how-to-start#assets-配置) 复制到 `/tmp` 目录中，方便测试时用户不可见。

### 参考答案

1. 参考答案文件存放在 `solution` 目录中，名称与基础代码文件一致，如：`sum_of_cubes.py`。
