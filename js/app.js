const courseData = {
    id: 'root',
    label: '课程目录',
    children: [
        {
            id: 'home',
            label: '首页',
            isHome: true
        },
        {
            id: 'math',
            label: '数学',
            children: [
                {
                    id: 'math-middle-7-up',
                    label: '七年级上册',
                    children: [
                        {
                            id: 'math-m7-ch1',
                            label: '第一章 有理数',
                            children: [
                                { id: 'math-m7-ch1-1', label: '1.1.1 什么是正数', file: 'content/math/middle/grade7/chapter1/1-1/1-1-1.md' },
                                { id: 'math-m7-ch1-2', label: '1.1.2 什么是负数', file: 'content/math/middle/grade7/chapter1/1-1/1-1-2.md' },
                                { id: 'math-m7-ch1-3', label: '1.1.3 0的特殊性', file: 'content/math/middle/grade7/chapter1/1-1/1-1-3.md' },
                                { id: 'math-m7-ch1-4', label: '1.1.4 正负数表示相反意义的量', file: 'content/math/middle/grade7/chapter1/1-1/1-1-4.md' },
                                { id: 'math-m7-ch1-5', label: '1.1.5 生活中的正负数', file: 'content/math/middle/grade7/chapter1/1-1/1-1-5.md' },
                                { id: 'math-m7-ch1-6', label: '1.2.1 什么是数轴', file: 'content/math/middle/grade7/chapter1/1-2/1-2-1.md' },
                                { id: 'math-m7-ch1-7', label: '1.2.2 数轴的三要素', file: 'content/math/middle/grade7/chapter1/1-2/1-2-2.md' },
                                { id: 'math-m7-ch1-8', label: '1.2.3 如何在数轴上表示数', file: 'content/math/middle/grade7/chapter1/1-2/1-2-3.md' },
                                { id: 'math-m7-ch1-9', label: '1.2.4 利用数轴比较大小', file: 'content/math/middle/grade7/chapter1/1-2/1-2-4.md' },
                                { id: 'math-m7-ch1-10', label: '1.2.5 数轴上的距离', file: 'content/math/middle/grade7/chapter1/1-2/1-2-5.md' },
                                { id: 'math-m7-ch1-11', label: '1.3.1 什么是相反数', file: 'content/math/middle/grade7/chapter1/1-3/1-3-1.md' },
                                { id: 'math-m7-ch1-12', label: '1.3.2 互为相反数的两个数', file: 'content/math/middle/grade7/chapter1/1-3/1-3-2.md' },
                                { id: 'math-m7-ch1-13', label: '1.3.3 0的相反数', file: 'content/math/middle/grade7/chapter1/1-3/1-3-3.md' },
                                { id: 'math-m7-ch1-14', label: '1.3.4 相反数的几何意义', file: 'content/math/middle/grade7/chapter1/1-3/1-3-4.md' },
                                { id: 'math-m7-ch1-15', label: '1.3.5 多重符号化简', file: 'content/math/middle/grade7/chapter1/1-3/1-3-5.md' },
                                { id: 'math-m7-ch1-16', label: '1.4.1 什么是绝对值', file: 'content/math/middle/grade7/chapter1/1-4/1-4-1.md' },
                                { id: 'math-m7-ch1-17', label: '1.4.2 绝对值的几何意义', file: 'content/math/middle/grade7/chapter1/1-4/1-4-2.md' },
                                { id: 'math-m7-ch1-18', label: '1.4.3 绝对值的代数意义', file: 'content/math/middle/grade7/chapter1/1-4/1-4-3.md' },
                                { id: 'math-m7-ch1-19', label: '1.4.4 绝对值的非负性', file: 'content/math/middle/grade7/chapter1/1-4/1-4-4.md' },
                                { id: 'math-m7-ch1-20', label: '1.4.5 有理数的大小比较', file: 'content/math/middle/grade7/chapter1/1-4/1-4-5.md' },
                                { id: 'math-m7-ch1-21', label: '1.5.1 同号两数相加', file: 'content/math/middle/grade7/chapter1/1-5/1-5-1.md' },
                                { id: 'math-m7-ch1-22', label: '1.5.2 异号两数相加', file: 'content/math/middle/grade7/chapter1/1-5/1-5-2.md' },
                                { id: 'math-m7-ch1-23', label: '1.5.3 加法运算律', file: 'content/math/middle/grade7/chapter1/1-5/1-5-3.md' },
                                { id: 'math-m7-ch1-24', label: '1.5.4 加法计算技巧', file: 'content/math/middle/grade7/chapter1/1-5/1-5-4.md' },
                                { id: 'math-m7-ch1-25', label: '1.5.5 加法常见错误汇总', file: 'content/math/middle/grade7/chapter1/1-5/1-5-5.md' },
                                { id: 'math-m7-ch1-26', label: '1.6.1 减法法则', file: 'content/math/middle/grade7/chapter1/1-6/1-6-1.md' },
                                { id: 'math-m7-ch1-27', label: '1.6.2 减法转化为加法的步骤', file: 'content/math/middle/grade7/chapter1/1-6/1-6-2.md' },
                                { id: 'math-m7-ch1-28', label: '1.6.3 加减混合运算', file: 'content/math/middle/grade7/chapter1/1-6/1-6-3.md' },
                                { id: 'math-m7-ch1-29', label: '1.6.4 省略加号的和', file: 'content/math/middle/grade7/chapter1/1-6/1-6-4.md' },
                                { id: 'math-m7-ch1-30', label: '1.6.5 减法常见错误汇总', file: 'content/math/middle/grade7/chapter1/1-6/1-6-5.md' }
                            ]
                        },
                        {
                            id: 'math-m7-ch2',
                            label: '第二章 整式的加减',
                            children: [
                                { id: 'math-m7-ch2-1', label: '2.1.1 为什么要用字母表示数', file: 'content/math/middle/grade7/chapter2/2-1/2-1-1.md' },
                                { id: 'math-m7-ch2-2', label: '2.1.2 用字母表示运算律', file: 'content/math/middle/grade7/chapter2/2-1/2-1-2.md' },
                                { id: 'math-m7-ch2-3', label: '2.1.3 用字母表示公式', file: 'content/math/middle/grade7/chapter2/2-1/2-1-3.md' },
                                { id: 'math-m7-ch2-4', label: '2.2.1 什么是代数式', file: 'content/math/middle/grade7/chapter2/2-2/2-2-1.md' },
                                { id: 'math-m7-ch2-5', label: '2.2.2 代数式的书写规范', file: 'content/math/middle/grade7/chapter2/2-2/2-2-2.md' },
                                { id: 'math-m7-ch2-6', label: '2.2.3 代数式的值', file: 'content/math/middle/grade7/chapter2/2-2/2-2-3.md' },
                                { id: 'math-m7-ch2-7', label: '2.3.1 单项式', file: 'content/math/middle/grade7/chapter2/2-3/2-3-1.md' },
                                { id: 'math-m7-ch2-8', label: '2.3.2 多项式', file: 'content/math/middle/grade7/chapter2/2-3/2-3-2.md' },
                                { id: 'math-m7-ch2-9', label: '2.3.3 整式', file: 'content/math/middle/grade7/chapter2/2-3/2-3-3.md' },
                                { id: 'math-m7-ch2-10', label: '2.4.1 什么是同类项', file: 'content/math/middle/grade7/chapter2/2-4/2-4-1.md' },
                                { id: 'math-m7-ch2-11', label: '2.4.2 合并同类项', file: 'content/math/middle/grade7/chapter2/2-4/2-4-2.md' },
                                { id: 'math-m7-ch2-12', label: '2.5.1 去括号法则', file: 'content/math/middle/grade7/chapter2/2-5/2-5-1.md' },
                                { id: 'math-m7-ch2-13', label: '2.5.2 去括号的应用', file: 'content/math/middle/grade7/chapter2/2-5/2-5-2.md' },
                                { id: 'math-m7-ch2-14', label: '2.6.1 整式的加减法则', file: 'content/math/middle/grade7/chapter2/2-6/2-6-1.md' },
                                { id: 'math-m7-ch2-15', label: '2.6.2 整式加减的应用', file: 'content/math/middle/grade7/chapter2/2-6/2-6-2.md' },
                                { id: 'math-m7-ch2-16', label: '2.6.3 先化简再求值', file: 'content/math/middle/grade7/chapter2/2-6/2-6-3.md' }
                            ]
                        },
                        {
                            id: 'math-m7-ch3',
                            label: '第三章 一元一次方程',
                            children: [
                                { id: 'math-m7-ch3-1', label: '3.1.1 什么是方程', file: 'content/math/middle/grade7/chapter3/3-1/3-1-1.md' },
                                { id: 'math-m7-ch3-2', label: '3.1.2 方程的解', file: 'content/math/middle/grade7/chapter3/3-1/3-1-2.md' },
                                { id: 'math-m7-ch3-3', label: '3.1.3 一元一次方程的定义', file: 'content/math/middle/grade7/chapter3/3-1/3-1-3.md' },
                                { id: 'math-m7-ch3-4', label: '3.2.1 等式的性质1', file: 'content/math/middle/grade7/chapter3/3-2/3-2-1.md' },
                                { id: 'math-m7-ch3-5', label: '3.2.2 等式的性质2', file: 'content/math/middle/grade7/chapter3/3-2/3-2-2.md' },
                                { id: 'math-m7-ch3-6', label: '3.2.3 等式性质的应用', file: 'content/math/middle/grade7/chapter3/3-2/3-2-3.md' },
                                { id: 'math-m7-ch3-7', label: '3.3.1 合并同类项解方程', file: 'content/math/middle/grade7/chapter3/3-3/3-3-1.md' },
                                { id: 'math-m7-ch3-8', label: '3.3.2 移项', file: 'content/math/middle/grade7/chapter3/3-3/3-3-2.md' },
                                { id: 'math-m7-ch3-9', label: '3.3.3 合并同类项与移项综合', file: 'content/math/middle/grade7/chapter3/3-3/3-3-3.md' },
                                { id: 'math-m7-ch3-10', label: '3.4.1 去括号解方程', file: 'content/math/middle/grade7/chapter3/3-4/3-4-1.md' },
                                { id: 'math-m7-ch3-11', label: '3.4.2 去分母解方程', file: 'content/math/middle/grade7/chapter3/3-4/3-4-2.md' },
                                { id: 'math-m7-ch3-12', label: '3.4.3 解一元一次方程的完整步骤', file: 'content/math/middle/grade7/chapter3/3-4/3-4-3.md' },
                                { id: 'math-m7-ch3-13', label: '3.5.1 列方程解应用题的步骤', file: 'content/math/middle/grade7/chapter3/3-5/3-5-1.md' },
                                { id: 'math-m7-ch3-14', label: '3.5.2 和差倍分问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-2.md' },
                                { id: 'math-m7-ch3-15', label: '3.5.3 行程问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-3.md' },
                                { id: 'math-m7-ch3-16', label: '3.5.4 工程问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-4.md' },
                                { id: 'math-m7-ch3-17', label: '3.5.5 利润问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-5.md' },
                                { id: 'math-m7-ch3-18', label: '3.5.6 利率问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-6.md' },
                                { id: 'math-m7-ch3-19', label: '3.5.7 年龄问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-7.md' },
                                { id: 'math-m7-ch3-20', label: '3.5.8 数字问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-8.md' },
                                { id: 'math-m7-ch3-21', label: '3.5.9 配套问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-9.md' },
                                { id: 'math-m7-ch3-22', label: '3.5.10 方案选择问题', file: 'content/math/middle/grade7/chapter3/3-5/3-5-10.md' }
                            ]
                        },
                        {
                            id: 'math-m7-ch4',
                            label: '第四章 几何图形初步',
                            children: [
                                { id: 'math-m7-ch4-1', label: '4.1.1 认识立体图形', file: 'content/math/middle/grade7/chapter4/4-1/4-1-1.md' },
                                { id: 'math-m7-ch4-2', label: '4.1.2 认识平面图形', file: 'content/math/middle/grade7/chapter4/4-1/4-1-2.md' },
                                { id: 'math-m7-ch4-3', label: '4.1.3 从不同方向看立体图形', file: 'content/math/middle/grade7/chapter4/4-1/4-1-3.md' },
                                { id: 'math-m7-ch4-4', label: '4.1.4 立体图形的展开图', file: 'content/math/middle/grade7/chapter4/4-1/4-1-4.md' },
                                { id: 'math-m7-ch4-5', label: '4.2.1 点、线、面、体的关系', file: 'content/math/middle/grade7/chapter4/4-2/4-2-1.md' },
                                { id: 'math-m7-ch4-6', label: '4.3.1 直线', file: 'content/math/middle/grade7/chapter4/4-3/4-3-1.md' },
                                { id: 'math-m7-ch4-7', label: '4.3.2 射线', file: 'content/math/middle/grade7/chapter4/4-3/4-3-2.md' },
                                { id: 'math-m7-ch4-8', label: '4.3.3 线段', file: 'content/math/middle/grade7/chapter4/4-3/4-3-3.md' },
                                { id: 'math-m7-ch4-9', label: '4.3.4 比较线段的长短', file: 'content/math/middle/grade7/chapter4/4-3/4-3-4.md' },
                                { id: 'math-m7-ch4-10', label: '4.3.5 线段的和与差', file: 'content/math/middle/grade7/chapter4/4-3/4-3-5.md' },
                                { id: 'math-m7-ch4-11', label: '4.3.6 线段的中点', file: 'content/math/middle/grade7/chapter4/4-3/4-3-6.md' },
                                { id: 'math-m7-ch4-12', label: '4.4.1 角的定义与表示', file: 'content/math/middle/grade7/chapter4/4-4/4-4-1.md' },
                                { id: 'math-m7-ch4-13', label: '4.4.2 角的度量', file: 'content/math/middle/grade7/chapter4/4-4/4-4-2.md' },
                                { id: 'math-m7-ch4-14', label: '4.4.3 角的比较与运算', file: 'content/math/middle/grade7/chapter4/4-4/4-4-3.md' },
                                { id: 'math-m7-ch4-15', label: '4.4.4 余角和补角', file: 'content/math/middle/grade7/chapter4/4-4/4-4-4.md' }
                            ]
                        }
                    ]
                },
                {
                    id: 'math-middle-7-down',
                    label: '七年级下册',
                    children: [
                        {
                            id: 'math-m7d-ch5-intersect',
                            label: '第五章 相交线与平行线',
                            children: [
                                { id: 'math-m7d-ch5-1', label: '5.1.1 相交线和对顶角', file: 'content/math/middle/grade7/down/chapter5/5-1/5-1-1.md' },
                                { id: 'math-m7d-ch5-2', label: '5.1.2 垂线', file: 'content/math/middle/grade7/down/chapter5/5-1/5-1-2.md' },
                                { id: 'math-m7d-ch5-3', label: '5.1.3 同位角、内错角、同旁内角', file: 'content/math/middle/grade7/down/chapter5/5-1/5-1-3.md' },
                                { id: 'math-m7d-ch5-4', label: '5.2.1 平行线', file: 'content/math/middle/grade7/down/chapter5/5-2/5-2-1.md' },
                                { id: 'math-m7d-ch5-5', label: '5.2.2 平行线的判定1——同位角相等', file: 'content/math/middle/grade7/down/chapter5/5-2/5-2-2.md' },
                                { id: 'math-m7d-ch5-6', label: '5.2.3 平行线的判定2——内错角相等', file: 'content/math/middle/grade7/down/chapter5/5-2/5-2-3.md' },
                                { id: 'math-m7d-ch5-7', label: '5.2.4 平行线的判定3——同旁内角互补', file: 'content/math/middle/grade7/down/chapter5/5-2/5-2-4.md' },
                                { id: 'math-m7d-ch5-8', label: '5.3.1 平行线的性质1——同位角相等', file: 'content/math/middle/grade7/down/chapter5/5-3/5-3-1.md' },
                                { id: 'math-m7d-ch5-9', label: '5.3.2 平行线的性质2——内错角相等', file: 'content/math/middle/grade7/down/chapter5/5-3/5-3-2.md' },
                                { id: 'math-m7d-ch5-10', label: '5.3.3 平行线的性质3——同旁内角互补', file: 'content/math/middle/grade7/down/chapter5/5-3/5-3-3.md' },
                                { id: 'math-m7d-ch5-11', label: '5.3.4 命题、定理、证明', file: 'content/math/middle/grade7/down/chapter5/5-3/5-3-4.md' },
                                { id: 'math-m7d-ch5-12', label: '5.4.1 平移的概念', file: 'content/math/middle/grade7/down/chapter5/5-4/5-4-1.md' },
                                { id: 'math-m7d-ch5-13', label: '5.4.2 平移的性质', file: 'content/math/middle/grade7/down/chapter5/5-4/5-4-2.md' },
                                { id: 'math-m7d-ch5-14', label: '5.4.3 平移作图', file: 'content/math/middle/grade7/down/chapter5/5-4/5-4-3.md' },
                                { id: 'math-m7d-ch5-15', label: '5.5.1 判定与性质的综合应用', file: 'content/math/middle/grade7/down/chapter5/5-5/5-5-1.md' },
                                { id: 'math-m7d-ch5-16', label: '5.5.2 添加辅助线解决平行线问题', file: 'content/math/middle/grade7/down/chapter5/5-5/5-5-2.md' }
                            ]
                        },
                        {
                            id: 'math-m7d-ch6-real',
                            label: '第六章 实数',
                            children: [
                                { id: 'math-m7d-ch6-1', label: '6.1.1 算术平方根', file: 'content/math/middle/grade7/down/chapter6/6-1/6-1-1.md' },
                                { id: 'math-m7d-ch6-2', label: '6.1.2 平方根', file: 'content/math/middle/grade7/down/chapter6/6-1/6-1-2.md' },
                                { id: 'math-m7d-ch6-3', label: '6.1.3 开平方', file: 'content/math/middle/grade7/down/chapter6/6-1/6-1-3.md' },
                                { id: 'math-m7d-ch6-4', label: '6.2.1 立方根', file: 'content/math/middle/grade7/down/chapter6/6-2/6-2-1.md' },
                                { id: 'math-m7d-ch6-5', label: '6.2.2 立方根的性质', file: 'content/math/middle/grade7/down/chapter6/6-2/6-2-2.md' },
                                { id: 'math-m7d-ch6-6', label: '6.3.1 无理数', file: 'content/math/middle/grade7/down/chapter6/6-3/6-3-1.md' },
                                { id: 'math-m7d-ch6-7', label: '6.3.2 实数的定义与分类', file: 'content/math/middle/grade7/down/chapter6/6-3/6-3-2.md' },
                                { id: 'math-m7d-ch6-8', label: '6.3.3 实数的相反数与绝对值', file: 'content/math/middle/grade7/down/chapter6/6-3/6-3-3.md' },
                                { id: 'math-m7d-ch6-9', label: '6.3.4 实数的运算', file: 'content/math/middle/grade7/down/chapter6/6-3/6-3-4.md' },
                                { id: 'math-m7d-ch6-10', label: '6.3.5 实数的大小比较', file: 'content/math/middle/grade7/down/chapter6/6-3/6-3-5.md' }
                            ]
                        },
                        {
                            id: 'math-m7d-ch7-coordinate',
                            label: '第七章 平面直角坐标系',
                            children: [
                                { id: 'math-m7d-ch7-1', label: '7.1.1 有序数对', file: 'content/math/middle/grade7/down/chapter7/7-1/7-1-1.md' },
                                { id: 'math-m7d-ch7-2', label: '7.1.2 平面直角坐标系', file: 'content/math/middle/grade7/down/chapter7/7-1/7-1-2.md' },
                                { id: 'math-m7d-ch7-3', label: '7.1.3 象限', file: 'content/math/middle/grade7/down/chapter7/7-1/7-1-3.md' },
                                { id: 'math-m7d-ch7-4', label: '7.2.1 用坐标表示地理位置', file: 'content/math/middle/grade7/down/chapter7/7-2/7-2-1.md' },
                                { id: 'math-m7d-ch7-5', label: '7.2.2 用坐标表示点的平移', file: 'content/math/middle/grade7/down/chapter7/7-2/7-2-2.md' },
                                { id: 'math-m7d-ch7-6', label: '7.2.3 用坐标表示图形的平移', file: 'content/math/middle/grade7/down/chapter7/7-2/7-2-3.md' },
                                { id: 'math-m7d-ch7-7', label: '7.2.4 关于坐标轴对称的点的坐标', file: 'content/math/middle/grade7/down/chapter7/7-2/7-2-4.md' },
                                { id: 'math-m7d-ch7-8', label: '7.2.5 坐标系中的面积问题', file: 'content/math/middle/grade7/down/chapter7/7-2/7-2-5.md' }
                            ]
                        },
                        {
                            id: 'math-m7d-ch8-equation',
                            label: '第八章 二元一次方程组',
                            children: [
                                { id: 'math-m7d-ch8-1', label: '8.1.1 二元一次方程', file: 'content/math/middle/grade7/down/chapter8/8-1/8-1-1.md' },
                                { id: 'math-m7d-ch8-2', label: '8.1.2 二元一次方程组', file: 'content/math/middle/grade7/down/chapter8/8-1/8-1-2.md' },
                                { id: 'math-m7d-ch8-3', label: '8.2.1 代入消元法', file: 'content/math/middle/grade7/down/chapter8/8-2/8-2-1.md' },
                                { id: 'math-m7d-ch8-4', label: '8.2.2 加减消元法', file: 'content/math/middle/grade7/down/chapter8/8-2/8-2-2.md' },
                                { id: 'math-m7d-ch8-5', label: '8.2.3 选择合适的方法解方程组', file: 'content/math/middle/grade7/down/chapter8/8-2/8-2-3.md' },
                                { id: 'math-m7d-ch8-6', label: '8.3.1 和差倍分问题', file: 'content/math/middle/grade7/down/chapter8/8-3/8-3-1.md' },
                                { id: 'math-m7d-ch8-7', label: '8.3.2 行程问题', file: 'content/math/middle/grade7/down/chapter8/8-3/8-3-2.md' },
                                { id: 'math-m7d-ch8-8', label: '8.3.3 工程问题', file: 'content/math/middle/grade7/down/chapter8/8-3/8-3-3.md' },
                                { id: 'math-m7d-ch8-9', label: '8.3.4 商品销售问题', file: 'content/math/middle/grade7/down/chapter8/8-3/8-3-4.md' },
                                { id: 'math-m7d-ch8-10', label: '8.3.5 配套问题', file: 'content/math/middle/grade7/down/chapter8/8-3/8-3-5.md' },
                                { id: 'math-m7d-ch8-11', label: '8.3.6 数字问题', file: 'content/math/middle/grade7/down/chapter8/8-3/8-3-6.md' },
                                { id: 'math-m7d-ch8-12', label: '8.4.1 三元一次方程组', file: 'content/math/middle/grade7/down/chapter8/8-4/8-4-1.md' }
                            ]
                        },
                        {
                            id: 'math-m7d-ch9-inequality',
                            label: '第九章 不等式与不等式组',
                            children: [
                                { id: 'math-m7d-ch9-1', label: '9.1.1 不等式及其解集', file: 'content/math/middle/grade7/down/chapter9/9-1/9-1-1.md' },
                                { id: 'math-m7d-ch9-2', label: '9.1.2 不等式的性质', file: 'content/math/middle/grade7/down/chapter9/9-1/9-1-2.md' },
                                { id: 'math-m7d-ch9-3', label: '9.1.3 一元一次不等式的解法', file: 'content/math/middle/grade7/down/chapter9/9-1/9-1-3.md' },
                                { id: 'math-m7d-ch9-4', label: '9.2.1 含分母的一元一次不等式', file: 'content/math/middle/grade7/down/chapter9/9-2/9-2-1.md' },
                                { id: 'math-m7d-ch9-5', label: '9.2.2 一元一次不等式的实际应用', file: 'content/math/middle/grade7/down/chapter9/9-2/9-2-2.md' },
                                { id: 'math-m7d-ch9-6', label: '9.3.1 一元一次不等式组', file: 'content/math/middle/grade7/down/chapter9/9-3/9-3-1.md' },
                                { id: 'math-m7d-ch9-7', label: '9.3.2 不等式组解集的四种情况', file: 'content/math/middle/grade7/down/chapter9/9-3/9-3-2.md' },
                                { id: 'math-m7d-ch9-8', label: '9.3.3 含等号的不等式组', file: 'content/math/middle/grade7/down/chapter9/9-3/9-3-3.md' },
                                { id: 'math-m7d-ch9-9', label: '9.3.4 不等式组的实际应用', file: 'content/math/middle/grade7/down/chapter9/9-3/9-3-4.md' },
                                { id: 'math-m7d-ch9-10', label: '9.3.5 不等式与方程组的综合', file: 'content/math/middle/grade7/down/chapter9/9-3/9-3-5.md' }
                            ]
                        },
                        {
                            id: 'math-m7d-ch10-statistics',
                            label: '第十章 数据的收集、整理与描述',
                            children: [
                                { id: 'math-m7d-ch10-1', label: '10.1.1 全面调查', file: 'content/math/middle/grade7/down/chapter10/10-1/10-1-1.md' },
                                { id: 'math-m7d-ch10-2', label: '10.1.2 抽样调查', file: 'content/math/middle/grade7/down/chapter10/10-1/10-1-2.md' },
                                { id: 'math-m7d-ch10-3', label: '10.1.3 简单随机抽样', file: 'content/math/middle/grade7/down/chapter10/10-1/10-1-3.md' },
                                { id: 'math-m7d-ch10-4', label: '10.2.1 频数与频率', file: 'content/math/middle/grade7/down/chapter10/10-2/10-2-1.md' },
                                { id: 'math-m7d-ch10-5', label: '10.2.2 频数分布直方图', file: 'content/math/middle/grade7/down/chapter10/10-2/10-2-2.md' },
                                { id: 'math-m7d-ch10-6', label: '10.2.3 频数分布折线图', file: 'content/math/middle/grade7/down/chapter10/10-2/10-2-3.md' },
                                { id: 'math-m7d-ch10-7', label: '10.3.1 扇形统计图', file: 'content/math/middle/grade7/down/chapter10/10-3/10-3-1.md' },
                                { id: 'math-m7d-ch10-8', label: '10.3.2 统计图的选择与综合应用', file: 'content/math/middle/grade7/down/chapter10/10-3/10-3-2.md' }
                            ]
                        }
                    ]
                },
                {
                    id: 'math-middle-8-up',
                    label: '八年级上册',
                    children: [
                        {
                            id: 'math-m8u-ch11-triangle',
                            label: '第十一章 三角形',
                            children: [
                                { id: 'math-m8u-ch11-1', label: '11.1.1 三角形的边', file: 'content/math/middle/grade8/up/chapter11/11-1/11-1-1.md' },
                                { id: 'math-m8u-ch11-2', label: '11.1.2 三角形的高', file: 'content/math/middle/grade8/up/chapter11/11-1/11-1-2.md' },
                                { id: 'math-m8u-ch11-3', label: '11.1.3 三角形的中线与角平分线', file: 'content/math/middle/grade8/up/chapter11/11-1/11-1-3.md' },
                                { id: 'math-m8u-ch11-4', label: '11.1.4 三角形的稳定性', file: 'content/math/middle/grade8/up/chapter11/11-1/11-1-4.md' },
                                { id: 'math-m8u-ch11-5', label: '11.2.1 三角形内角和定理', file: 'content/math/middle/grade8/up/chapter11/11-2/11-2-1.md' },
                                { id: 'math-m8u-ch11-6', label: '11.2.2 直角三角形的两个锐角互余', file: 'content/math/middle/grade8/up/chapter11/11-2/11-2-2.md' },
                                { id: 'math-m8u-ch11-7', label: '11.2.3 三角形的外角', file: 'content/math/middle/grade8/up/chapter11/11-2/11-2-3.md' },
                                { id: 'math-m8u-ch11-8', label: '11.3.1 多边形与对角线', file: 'content/math/middle/grade8/up/chapter11/11-3/11-3-1.md' },
                                { id: 'math-m8u-ch11-9', label: '11.3.2 多边形内角和', file: 'content/math/middle/grade8/up/chapter11/11-3/11-3-2.md' },
                                { id: 'math-m8u-ch11-10', label: '11.3.3 多边形外角和', file: 'content/math/middle/grade8/up/chapter11/11-3/11-3-3.md' }
                            ]
                        },
                        {
                            id: 'math-m8u-ch12-congruent',
                            label: '第十二章 全等三角形',
                            children: [
                                { id: 'math-m8u-ch12-1', label: '12.1.1 全等形的概念', file: 'content/math/middle/grade8/up/chapter12/12-1/12-1-1.md' },
                                { id: 'math-m8u-ch12-2', label: '12.1.2 全等三角形及其对应元素', file: 'content/math/middle/grade8/up/chapter12/12-1/12-1-2.md' },
                                { id: 'math-m8u-ch12-3', label: '12.1.3 全等三角形的性质', file: 'content/math/middle/grade8/up/chapter12/12-1/12-1-3.md' },
                                { id: 'math-m8u-ch12-4', label: '12.2.1 SSS（边边边）', file: 'content/math/middle/grade8/up/chapter12/12-2/12-2-1.md' },
                                { id: 'math-m8u-ch12-5', label: '12.2.2 SAS（边角边）', file: 'content/math/middle/grade8/up/chapter12/12-2/12-2-2.md' },
                                { id: 'math-m8u-ch12-6', label: '12.2.3 ASA（角边角）', file: 'content/math/middle/grade8/up/chapter12/12-2/12-2-3.md' },
                                { id: 'math-m8u-ch12-7', label: '12.2.4 AAS（角角边）', file: 'content/math/middle/grade8/up/chapter12/12-2/12-2-4.md' },
                                { id: 'math-m8u-ch12-8', label: '12.2.5 HL（斜边直角边）', file: 'content/math/middle/grade8/up/chapter12/12-2/12-2-5.md' },
                                { id: 'math-m8u-ch12-9', label: '12.2.6 判定方法的选择与综合运用', file: 'content/math/middle/grade8/up/chapter12/12-2/12-2-6.md' },
                                { id: 'math-m8u-ch12-10', label: '12.3.1 角平分线的性质', file: 'content/math/middle/grade8/up/chapter12/12-3/12-3-1.md' },
                                { id: 'math-m8u-ch12-11', label: '12.3.2 角平分线的判定', file: 'content/math/middle/grade8/up/chapter12/12-3/12-3-2.md' },
                                { id: 'math-m8u-ch12-12', label: '12.3.3 尺规作图——作角平分线', file: 'content/math/middle/grade8/up/chapter12/12-3/12-3-3.md' }
                            ]
                        },
                        {
                            id: 'math-m8u-ch13-axis',
                            label: '第十三章 轴对称',
                            children: [
                                { id: 'math-m8u-ch13-1', label: '13.1.1 轴对称图形', file: 'content/math/middle/grade8/up/chapter13/13-1/13-1-1.md' },
                                { id: 'math-m8u-ch13-2', label: '13.1.2 两个图形关于某直线对称', file: 'content/math/middle/grade8/up/chapter13/13-1/13-1-2.md' },
                                { id: 'math-m8u-ch13-3', label: '13.1.3 线段的垂直平分线', file: 'content/math/middle/grade8/up/chapter13/13-1/13-1-3.md' },
                                { id: 'math-m8u-ch13-4', label: '13.1.4 垂直平分线的判定', file: 'content/math/middle/grade8/up/chapter13/13-1/13-1-4.md' },
                                { id: 'math-m8u-ch13-5', label: '13.1.5 轴对称的性质', file: 'content/math/middle/grade8/up/chapter13/13-1/13-1-5.md' },
                                { id: 'math-m8u-ch13-6', label: '13.1.6 尺规作图——作对称点与对称轴', file: 'content/math/middle/grade8/up/chapter13/13-1/13-1-6.md' },
                                { id: 'math-m8u-ch13-7', label: '13.2.1 等腰三角形的性质（等边对等角）', file: 'content/math/middle/grade8/up/chapter13/13-2/13-2-1.md' },
                                { id: 'math-m8u-ch13-8', label: '13.2.2 等腰三角形的性质（三线合一）', file: 'content/math/middle/grade8/up/chapter13/13-2/13-2-2.md' },
                                { id: 'math-m8u-ch13-9', label: '13.2.3 等腰三角形的判定', file: 'content/math/middle/grade8/up/chapter13/13-2/13-2-3.md' },
                                { id: 'math-m8u-ch13-10', label: '13.2.4 等边三角形的性质', file: 'content/math/middle/grade8/up/chapter13/13-2/13-2-4.md' },
                                { id: 'math-m8u-ch13-11', label: '13.2.5 等边三角形的判定', file: 'content/math/middle/grade8/up/chapter13/13-2/13-2-5.md' },
                                { id: 'math-m8u-ch13-12', label: '13.2.6 含30°角的直角三角形的性质', file: 'content/math/middle/grade8/up/chapter13/13-2/13-2-6.md' }
                            ]
                        },
                        {
                            id: 'math-m8u-ch14-algebra',
                            label: '第十四章 整式的乘法与因式分解',
                            children: [
                                { id: 'math-m8u-ch14-1', label: '14.1.1 同底数幂的乘法', file: 'content/math/middle/grade8/up/chapter14/14-1/14-1-1.md' },
                                { id: 'math-m8u-ch14-2', label: '14.1.2 幂的乘方', file: 'content/math/middle/grade8/up/chapter14/14-1/14-1-2.md' },
                                { id: 'math-m8u-ch14-3', label: '14.1.3 积的乘方', file: 'content/math/middle/grade8/up/chapter14/14-1/14-1-3.md' },
                                { id: 'math-m8u-ch14-4', label: '14.1.4 单项式乘单项式', file: 'content/math/middle/grade8/up/chapter14/14-1/14-1-4.md' },
                                { id: 'math-m8u-ch14-5', label: '14.1.5 单项式乘多项式', file: 'content/math/middle/grade8/up/chapter14/14-1/14-1-5.md' },
                                { id: 'math-m8u-ch14-6', label: '14.1.6 多项式乘多项式', file: 'content/math/middle/grade8/up/chapter14/14-1/14-1-6.md' },
                                { id: 'math-m8u-ch14-7', label: '14.2.1 平方差公式', file: 'content/math/middle/grade8/up/chapter14/14-2/14-2-1.md' },
                                { id: 'math-m8u-ch14-8', label: '14.2.2 完全平方公式', file: 'content/math/middle/grade8/up/chapter14/14-2/14-2-2.md' },
                                { id: 'math-m8u-ch14-9', label: '14.2.3 添括号法则', file: 'content/math/middle/grade8/up/chapter14/14-2/14-2-3.md' },
                                { id: 'math-m8u-ch14-10', label: '14.2.4 乘法公式的综合应用', file: 'content/math/middle/grade8/up/chapter14/14-2/14-2-4.md' },
                                { id: 'math-m8u-ch14-11', label: '14.3.1 因式分解的概念', file: 'content/math/middle/grade8/up/chapter14/14-3/14-3-1.md' },
                                { id: 'math-m8u-ch14-12', label: '14.3.2 提公因式法', file: 'content/math/middle/grade8/up/chapter14/14-3/14-3-2.md' },
                                { id: 'math-m8u-ch14-13', label: '14.3.3 用平方差公式因式分解', file: 'content/math/middle/grade8/up/chapter14/14-3/14-3-3.md' },
                                { id: 'math-m8u-ch14-14', label: '14.3.4 用完全平方公式因式分解', file: 'content/math/middle/grade8/up/chapter14/14-3/14-3-4.md' },
                                { id: 'math-m8u-ch14-15', label: '14.3.5 十字相乘法', file: 'content/math/middle/grade8/up/chapter14/14-3/14-3-5.md' },
                                { id: 'math-m8u-ch14-16', label: '14.3.6 分组分解法', file: 'content/math/middle/grade8/up/chapter14/14-3/14-3-6.md' },
                                { id: 'math-m8u-ch14-17', label: '14.3.7 因式分解的一般步骤', file: 'content/math/middle/grade8/up/chapter14/14-3/14-3-7.md' },
                                { id: 'math-m8u-ch14-18', label: '14.4.1 同底数幂的除法', file: 'content/math/middle/grade8/up/chapter14/14-4/14-4-1.md' }
                            ]
                        },
                        {
                            id: 'math-m8u-ch15-fraction',
                            label: '第十五章 分式',
                            children: [
                                { id: 'math-m8u-ch15-1', label: '15.1.1 从分数到分式', file: 'content/math/middle/grade8/up/chapter15/15-1/15-1-1.md' },
                                { id: 'math-m8u-ch15-2', label: '15.1.2 分式的基本性质', file: 'content/math/middle/grade8/up/chapter15/15-1/15-1-2.md' },
                                { id: 'math-m8u-ch15-3', label: '15.1.3 分式的约分', file: 'content/math/middle/grade8/up/chapter15/15-1/15-1-3.md' },
                                { id: 'math-m8u-ch15-4', label: '15.1.4 分式的通分', file: 'content/math/middle/grade8/up/chapter15/15-1/15-1-4.md' },
                                { id: 'math-m8u-ch15-5', label: '15.2.1 分式的乘除', file: 'content/math/middle/grade8/up/chapter15/15-2/15-2-1.md' },
                                { id: 'math-m8u-ch15-6', label: '15.2.2 分式的加减', file: 'content/math/middle/grade8/up/chapter15/15-2/15-2-2.md' },
                                { id: 'math-m8u-ch15-7', label: '15.2.3 分式的混合运算', file: 'content/math/middle/grade8/up/chapter15/15-2/15-2-3.md' },
                                { id: 'math-m8u-ch15-8', label: '15.2.4 整数指数幂', file: 'content/math/middle/grade8/up/chapter15/15-2/15-2-4.md' },
                                { id: 'math-m8u-ch15-9', label: '15.3.1 分式方程的概念', file: 'content/math/middle/grade8/up/chapter15/15-3/15-3-1.md' },
                                { id: 'math-m8u-ch15-10', label: '15.3.2 分式方程的解法', file: 'content/math/middle/grade8/up/chapter15/15-3/15-3-2.md' },
                                { id: 'math-m8u-ch15-11', label: '15.3.3 分式方程的增根', file: 'content/math/middle/grade8/up/chapter15/15-3/15-3-3.md' },
                                { id: 'math-m8u-ch15-12', label: '15.3.4 分式方程的实际应用——行程问题', file: 'content/math/middle/grade8/up/chapter15/15-3/15-3-4.md' },
                                { id: 'math-m8u-ch15-13', label: '15.3.5 分式方程的实际应用——工程问题', file: 'content/math/middle/grade8/up/chapter15/15-3/15-3-5.md' },
                                { id: 'math-m8u-ch15-14', label: '15.3.6 分式方程的实际应用——销售问题', file: 'content/math/middle/grade8/up/chapter15/15-3/15-3-6.md' },
                                { id: 'math-m8u-ch15-15', label: '15.4.1 分式的化简求值', file: 'content/math/middle/grade8/up/chapter15/15-4/15-4-1.md' },
                                { id: 'math-m8u-ch15-16', label: '15.4.2 条件分式的求值', file: 'content/math/middle/grade8/up/chapter15/15-4/15-4-2.md' }
                            ]
                        }
                    ]
                },
                {
                    id: 'math-middle-8-down',
                    label: '八年级下册',
                    children: [
                        {
                            id: 'math-m8d-ch16-radical',
                            label: '第十六章 二次根式',
                            children: [
                                { id: 'math-m8d-ch16-1', label: '16.1.1 二次根式的概念', file: 'content/math/middle/grade8/down/chapter16/16-1/16-1-1.md' },
                                { id: 'math-m8d-ch16-2', label: '16.1.2 二次根式有意义的条件', file: 'content/math/middle/grade8/down/chapter16/16-1/16-1-2.md' },
                                { id: 'math-m8d-ch16-3', label: '16.1.3 二次根式的性质（√a²）', file: 'content/math/middle/grade8/down/chapter16/16-1/16-1-3.md' },
                                { id: 'math-m8d-ch16-4', label: '16.1.4 二次根式的性质（√ab与√a/b）', file: 'content/math/middle/grade8/down/chapter16/16-1/16-1-4.md' },
                                { id: 'math-m8d-ch16-5', label: '16.2.1 二次根式的乘法', file: 'content/math/middle/grade8/down/chapter16/16-2/16-2-1.md' },
                                { id: 'math-m8d-ch16-6', label: '16.2.2 二次根式的除法', file: 'content/math/middle/grade8/down/chapter16/16-2/16-2-2.md' },
                                { id: 'math-m8d-ch16-7', label: '16.2.3 最简二次根式', file: 'content/math/middle/grade8/down/chapter16/16-2/16-2-3.md' },
                                { id: 'math-m8d-ch16-8', label: '16.3.1 同类二次根式', file: 'content/math/middle/grade8/down/chapter16/16-3/16-3-1.md' },
                                { id: 'math-m8d-ch16-9', label: '16.3.2 二次根式的加减法', file: 'content/math/middle/grade8/down/chapter16/16-3/16-3-2.md' },
                                { id: 'math-m8d-ch16-10', label: '16.3.3 二次根式的混合运算', file: 'content/math/middle/grade8/down/chapter16/16-3/16-3-3.md' },
                                { id: 'math-m8d-ch16-11', label: '16.3.4 分母有理化', file: 'content/math/middle/grade8/down/chapter16/16-3/16-3-4.md' },
                                { id: 'math-m8d-ch16-12', label: '16.3.5 二次根式的化简求值', file: 'content/math/middle/grade8/down/chapter16/16-3/16-3-5.md' }
                            ]
                        },
                        {
                            id: 'math-m8d-ch17-pythagorean',
                            label: '第十七章 勾股定理',
                            children: [
                                { id: 'math-m8d-ch17-1', label: '17.1.1 勾股定理的发现与证明', file: 'content/math/middle/grade8/down/chapter17/17-1/17-1-1.md' },
                                { id: 'math-m8d-ch17-2', label: '17.1.2 勾股定理的简单应用', file: 'content/math/middle/grade8/down/chapter17/17-1/17-1-2.md' },
                                { id: 'math-m8d-ch17-3', label: '17.1.3 勾股定理的实际应用', file: 'content/math/middle/grade8/down/chapter17/17-1/17-1-3.md' },
                                { id: 'math-m8d-ch17-4', label: '17.2.1 勾股定理的逆定理', file: 'content/math/middle/grade8/down/chapter17/17-2/17-2-1.md' },
                                { id: 'math-m8d-ch17-5', label: '17.2.2 勾股数', file: 'content/math/middle/grade8/down/chapter17/17-2/17-2-2.md' },
                                { id: 'math-m8d-ch17-6', label: '17.2.3 逆定理的应用——判定直角三角形', file: 'content/math/middle/grade8/down/chapter17/17-2/17-2-3.md' },
                                { id: 'math-m8d-ch17-7', label: '17.3.1 折叠问题中的勾股定理', file: 'content/math/middle/grade8/down/chapter17/17-3/17-3-1.md' },
                                { id: 'math-m8d-ch17-8', label: '17.3.2 最短路径问题', file: 'content/math/middle/grade8/down/chapter17/17-3/17-3-2.md' }
                            ]
                        },
                        {
                            id: 'math-m8d-ch18-parallelogram',
                            label: '第十八章 平行四边形',
                            children: [
                                { id: 'math-m8d-ch18-1', label: '18.1.1 平行四边形的定义', file: 'content/math/middle/grade8/down/chapter18/18-1/18-1-1.md' },
                                { id: 'math-m8d-ch18-2', label: '18.1.2 平行四边形的边角性质', file: 'content/math/middle/grade8/down/chapter18/18-1/18-1-2.md' },
                                { id: 'math-m8d-ch18-3', label: '18.1.3 平行四边形的对角线性质', file: 'content/math/middle/grade8/down/chapter18/18-1/18-1-3.md' },
                                { id: 'math-m8d-ch18-4', label: '18.1.4 平行线间的距离', file: 'content/math/middle/grade8/down/chapter18/18-1/18-1-4.md' },
                                { id: 'math-m8d-ch18-5', label: '18.2.1 平行四边形的判定（边）', file: 'content/math/middle/grade8/down/chapter18/18-2/18-2-1.md' },
                                { id: 'math-m8d-ch18-6', label: '18.2.2 平行四边形的判定（角和对角线）', file: 'content/math/middle/grade8/down/chapter18/18-2/18-2-2.md' },
                                { id: 'math-m8d-ch18-7', label: '18.2.3 三角形的中位线', file: 'content/math/middle/grade8/down/chapter18/18-2/18-2-3.md' },
                                { id: 'math-m8d-ch18-8', label: '18.3.1 矩形的性质', file: 'content/math/middle/grade8/down/chapter18/18-3/18-3-1.md' },
                                { id: 'math-m8d-ch18-9', label: '18.3.2 矩形的判定', file: 'content/math/middle/grade8/down/chapter18/18-3/18-3-2.md' },
                                { id: 'math-m8d-ch18-10', label: '18.4.1 菱形的性质', file: 'content/math/middle/grade8/down/chapter18/18-4/18-4-1.md' },
                                { id: 'math-m8d-ch18-11', label: '18.4.2 菱形的判定', file: 'content/math/middle/grade8/down/chapter18/18-4/18-4-2.md' },
                                { id: 'math-m8d-ch18-12', label: '18.5.1 正方形的性质', file: 'content/math/middle/grade8/down/chapter18/18-5/18-5-1.md' },
                                { id: 'math-m8d-ch18-13', label: '18.5.2 正方形的判定', file: 'content/math/middle/grade8/down/chapter18/18-5/18-5-2.md' },
                                { id: 'math-m8d-ch18-14', label: '18.5.3 特殊平行四边形的综合应用', file: 'content/math/middle/grade8/down/chapter18/18-5/18-5-3.md' }
                            ]
                        },
                        {
                            id: 'math-m8d-ch19-linear-function',
                            label: '第十九章 一次函数',
                            children: [
                                { id: 'math-m8d-ch19-1', label: '19.1.1 变量与常量', file: 'content/math/middle/grade8/down/chapter19/19-1/19-1-1.md' },
                                { id: 'math-m8d-ch19-2', label: '19.1.2 函数的概念', file: 'content/math/middle/grade8/down/chapter19/19-1/19-1-2.md' },
                                { id: 'math-m8d-ch19-3', label: '19.1.3 函数自变量的取值范围', file: 'content/math/middle/grade8/down/chapter19/19-1/19-1-3.md' },
                                { id: 'math-m8d-ch19-4', label: '19.1.4 函数值', file: 'content/math/middle/grade8/down/chapter19/19-1/19-1-4.md' },
                                { id: 'math-m8d-ch19-5', label: '19.1.5 函数的图象', file: 'content/math/middle/grade8/down/chapter19/19-1/19-1-5.md' },
                                { id: 'math-m8d-ch19-6', label: '19.2.1 正比例函数', file: 'content/math/middle/grade8/down/chapter19/19-2/19-2-1.md' },
                                { id: 'math-m8d-ch19-7', label: '19.2.2 一次函数的定义', file: 'content/math/middle/grade8/down/chapter19/19-2/19-2-2.md' },
                                { id: 'math-m8d-ch19-8', label: '19.2.3 一次函数的图象', file: 'content/math/middle/grade8/down/chapter19/19-2/19-2-3.md' },
                                { id: 'math-m8d-ch19-9', label: '19.2.4 待定系数法求一次函数解析式', file: 'content/math/middle/grade8/down/chapter19/19-2/19-2-4.md' },
                                { id: 'math-m8d-ch19-10', label: '19.3.1 一次函数与一元一次方程', file: 'content/math/middle/grade8/down/chapter19/19-3/19-3-1.md' },
                                { id: 'math-m8d-ch19-11', label: '19.3.2 一次函数与一元一次不等式', file: 'content/math/middle/grade8/down/chapter19/19-3/19-3-2.md' },
                                { id: 'math-m8d-ch19-12', label: '19.3.3 一次函数与二元一次方程组', file: 'content/math/middle/grade8/down/chapter19/19-3/19-3-3.md' },
                                { id: 'math-m8d-ch19-13', label: '19.4.1 一次函数应用题——方案选择', file: 'content/math/middle/grade8/down/chapter19/19-4/19-4-1.md' },
                                { id: 'math-m8d-ch19-14', label: '19.4.2 一次函数应用题——行程与利润', file: 'content/math/middle/grade8/down/chapter19/19-4/19-4-2.md' }
                            ]
                        },
                        {
                            id: 'math-m8d-ch20-data-analysis',
                            label: '第二十章 数据的分析',
                            children: [
                                { id: 'math-m8d-ch20-1', label: '20.1.1 平均数', file: 'content/math/middle/grade8/down/chapter20/20-1/20-1-1.md' },
                                { id: 'math-m8d-ch20-2', label: '20.1.2 加权平均数', file: 'content/math/middle/grade8/down/chapter20/20-1/20-1-2.md' },
                                { id: 'math-m8d-ch20-3', label: '20.1.3 中位数', file: 'content/math/middle/grade8/down/chapter20/20-1/20-1-3.md' },
                                { id: 'math-m8d-ch20-4', label: '20.1.4 众数', file: 'content/math/middle/grade8/down/chapter20/20-1/20-1-4.md' },
                                { id: 'math-m8d-ch20-5', label: '20.2.1 极差', file: 'content/math/middle/grade8/down/chapter20/20-2/20-2-1.md' },
                                { id: 'math-m8d-ch20-6', label: '20.2.2 方差', file: 'content/math/middle/grade8/down/chapter20/20-2/20-2-2.md' },
                                { id: 'math-m8d-ch20-7', label: '20.2.3 用样本估计总体', file: 'content/math/middle/grade8/down/chapter20/20-2/20-2-3.md' },
                                { id: 'math-m8d-ch20-8', label: '20.3.1 数据分析的实际应用', file: 'content/math/middle/grade8/down/chapter20/20-3/20-3-1.md' }
                            ]
                        }
                    ]
                },
                {
                    id: 'math-middle-9-up',
                    label: '九年级上册',
                    children: [
                        {
                            id: 'math-m9u-ch21',
                            label: '第二十一章 一元二次方程',
                            children: [
                                {
                                    id: 'math-m9u-ch21-1',
                                    label: '21.1 一元二次方程',
                                    children: [
                                        { id: 'math-m9u-ch21-1-1', label: '21.1.1 一元二次方程的定义', file: 'content/math/middle/grade9/up/chapter21/21-1/21-1-1.md' },
                                        { id: 'math-m9u-ch21-1-2', label: '21.1.2 一元二次方程的解', file: 'content/math/middle/grade9/up/chapter21/21-1/21-1-2.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch21-2',
                                    label: '21.2 解一元二次方程',
                                    children: [
                                        { id: 'math-m9u-ch21-2-1', label: '21.2.1 直接开平方法', file: 'content/math/middle/grade9/up/chapter21/21-2/21-2-1.md' },
                                        { id: 'math-m9u-ch21-2-2', label: '21.2.2 配方法', file: 'content/math/middle/grade9/up/chapter21/21-2/21-2-2.md' },
                                        { id: 'math-m9u-ch21-2-3', label: '21.2.3 公式法', file: 'content/math/middle/grade9/up/chapter21/21-2/21-2-3.md' },
                                        { id: 'math-m9u-ch21-2-4', label: '21.2.4 因式分解法', file: 'content/math/middle/grade9/up/chapter21/21-2/21-2-4.md' },
                                        { id: 'math-m9u-ch21-2-5', label: '21.2.5 根的判别式', file: 'content/math/middle/grade9/up/chapter21/21-2/21-2-5.md' },
                                        { id: 'math-m9u-ch21-2-6', label: '21.2.6 根与系数的关系（韦达定理）', file: 'content/math/middle/grade9/up/chapter21/21-2/21-2-6.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch21-3',
                                    label: '21.3 一元二次方程的实际应用',
                                    children: [
                                        { id: 'math-m9u-ch21-3-1', label: '21.3.1 传播与增长率问题', file: 'content/math/middle/grade9/up/chapter21/21-3/21-3-1.md' },
                                        { id: 'math-m9u-ch21-3-2', label: '21.3.2 面积问题', file: 'content/math/middle/grade9/up/chapter21/21-3/21-3-2.md' },
                                        { id: 'math-m9u-ch21-3-3', label: '21.3.3 利润问题', file: 'content/math/middle/grade9/up/chapter21/21-3/21-3-3.md' },
                                        { id: 'math-m9u-ch21-3-4', label: '21.3.4 数字与循环问题', file: 'content/math/middle/grade9/up/chapter21/21-3/21-3-4.md' },
                                        { id: 'math-m9u-ch21-3-5', label: '21.3.5 动点问题', file: 'content/math/middle/grade9/up/chapter21/21-3/21-3-5.md' },
                                        { id: 'math-m9u-ch21-3-6', label: '21.3.6 一元二次方程应用题综合', file: 'content/math/middle/grade9/up/chapter21/21-3/21-3-6.md' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'math-m9u-ch22',
                            label: '第二十二章 二次函数',
                            children: [
                                {
                                    id: 'math-m9u-ch22-1',
                                    label: '22.1 二次函数的图象和性质',
                                    children: [
                                        { id: 'math-m9u-ch22-1-1', label: '22.1.1 二次函数的定义', file: 'content/math/middle/grade9/up/chapter22/22-1/22-1-1.md' },
                                        { id: 'math-m9u-ch22-1-2', label: '22.1.2 二次函数 y=ax² 的图象和性质', file: 'content/math/middle/grade9/up/chapter22/22-1/22-1-2.md' },
                                        { id: 'math-m9u-ch22-1-3', label: '22.1.3 二次函数 y=ax²+k 的图象和性质', file: 'content/math/middle/grade9/up/chapter22/22-1/22-1-3.md' },
                                        { id: 'math-m9u-ch22-1-4', label: '22.1.4 二次函数 y=a(x-h)² 的图象和性质', file: 'content/math/middle/grade9/up/chapter22/22-1/22-1-4.md' },
                                        { id: 'math-m9u-ch22-1-5', label: '22.1.5 二次函数 y=a(x-h)²+k 的图象和性质', file: 'content/math/middle/grade9/up/chapter22/22-1/22-1-5.md' },
                                        { id: 'math-m9u-ch22-1-6', label: '22.1.6 二次函数 y=ax²+bx+c 的图象和性质', file: 'content/math/middle/grade9/up/chapter22/22-1/22-1-6.md' },
                                        { id: 'math-m9u-ch22-1-7', label: '22.1.7 二次函数图象与系数的关系', file: 'content/math/middle/grade9/up/chapter22/22-1/22-1-7.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch22-2',
                                    label: '22.2 二次函数与一元二次方程',
                                    children: [
                                        { id: 'math-m9u-ch22-2-1', label: '22.2.1 二次函数与一元二次方程的关系', file: 'content/math/middle/grade9/up/chapter22/22-2/22-2-1.md' },
                                        { id: 'math-m9u-ch22-2-2', label: '22.2.2 二次函数与一元二次不等式', file: 'content/math/middle/grade9/up/chapter22/22-2/22-2-2.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch22-3',
                                    label: '22.3 实际问题与二次函数',
                                    children: [
                                        { id: 'math-m9u-ch22-3-1', label: '22.3.1 二次函数的最值应用——面积问题', file: 'content/math/middle/grade9/up/chapter22/22-3/22-3-1.md' },
                                        { id: 'math-m9u-ch22-3-2', label: '22.3.2 二次函数的最值应用——利润问题', file: 'content/math/middle/grade9/up/chapter22/22-3/22-3-2.md' },
                                        { id: 'math-m9u-ch22-3-3', label: '22.3.3 二次函数的最值应用——拱桥与喷泉', file: 'content/math/middle/grade9/up/chapter22/22-3/22-3-3.md' },
                                        { id: 'math-m9u-ch22-3-4', label: '22.3.4 二次函数的最值应用——运动轨迹', file: 'content/math/middle/grade9/up/chapter22/22-3/22-3-4.md' },
                                        { id: 'math-m9u-ch22-3-5', label: '22.3.5 二次函数综合应用——动点与面积', file: 'content/math/middle/grade9/up/chapter22/22-3/22-3-5.md' },
                                        { id: 'math-m9u-ch22-3-6', label: '22.3.6 二次函数综合应用——等腰三角形与直角三角形', file: 'content/math/middle/grade9/up/chapter22/22-3/22-3-6.md' },
                                        { id: 'math-m9u-ch22-3-7', label: '22.3.7 二次函数综合应用——平行四边形存在性', file: 'content/math/middle/grade9/up/chapter22/22-3/22-3-7.md' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'math-m9u-ch23',
                            label: '第二十三章 旋转',
                            children: [
                                {
                                    id: 'math-m9u-ch23-1',
                                    label: '23.1 图形的旋转',
                                    children: [
                                        { id: 'math-m9u-ch23-1-1', label: '23.1.1 旋转的定义', file: 'content/math/middle/grade9/up/chapter23/23-1/23-1-1.md' },
                                        { id: 'math-m9u-ch23-1-2', label: '23.1.2 旋转的性质', file: 'content/math/middle/grade9/up/chapter23/23-1/23-1-2.md' },
                                        { id: 'math-m9u-ch23-1-3', label: '23.1.3 旋转作图', file: 'content/math/middle/grade9/up/chapter23/23-1/23-1-3.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch23-2',
                                    label: '23.2 中心对称',
                                    children: [
                                        { id: 'math-m9u-ch23-2-1', label: '23.2.1 中心对称的定义与性质', file: 'content/math/middle/grade9/up/chapter23/23-2/23-2-1.md' },
                                        { id: 'math-m9u-ch23-2-2', label: '23.2.2 中心对称图形', file: 'content/math/middle/grade9/up/chapter23/23-2/23-2-2.md' },
                                        { id: 'math-m9u-ch23-2-3', label: '23.2.3 关于原点对称的点的坐标', file: 'content/math/middle/grade9/up/chapter23/23-2/23-2-3.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch23-3',
                                    label: '23.3 课题学习——图案设计',
                                    children: [
                                        { id: 'math-m9u-ch23-3-1', label: '23.3.1 利用旋转设计图案', file: 'content/math/middle/grade9/up/chapter23/23-3/23-3-1.md' },
                                        { id: 'math-m9u-ch23-3-2', label: '23.3.2 旋转的综合应用', file: 'content/math/middle/grade9/up/chapter23/23-3/23-3-2.md' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'math-m9u-ch24',
                            label: '第二十四章 圆',
                            children: [
                                {
                                    id: 'math-m9u-ch24-1',
                                    label: '24.1 圆的有关性质',
                                    children: [
                                        { id: 'math-m9u-ch24-1-1', label: '24.1.1 圆', file: 'content/math/middle/grade9/up/chapter24/24-1/24-1-1.md' },
                                        { id: 'math-m9u-ch24-1-2', label: '24.1.2 垂直于弦的直径', file: 'content/math/middle/grade9/up/chapter24/24-1/24-1-2.md' },
                                        { id: 'math-m9u-ch24-1-3', label: '24.1.3 弧、弦、圆心角', file: 'content/math/middle/grade9/up/chapter24/24-1/24-1-3.md' },
                                        { id: 'math-m9u-ch24-1-4', label: '24.1.4 圆周角', file: 'content/math/middle/grade9/up/chapter24/24-1/24-1-4.md' },
                                        { id: 'math-m9u-ch24-1-5', label: '24.1.5 圆内接四边形', file: 'content/math/middle/grade9/up/chapter24/24-1/24-1-5.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch24-2',
                                    label: '24.2 点和圆、直线和圆的位置关系',
                                    children: [
                                        { id: 'math-m9u-ch24-2-1', label: '24.2.1 点和圆的位置关系', file: 'content/math/middle/grade9/up/chapter24/24-2/24-2-1.md' },
                                        { id: 'math-m9u-ch24-2-2', label: '24.2.2 直线和圆的位置关系（一）——相离与相切', file: 'content/math/middle/grade9/up/chapter24/24-2/24-2-2.md' },
                                        { id: 'math-m9u-ch24-2-3', label: '24.2.3 切线的判定与性质', file: 'content/math/middle/grade9/up/chapter24/24-2/24-2-3.md' },
                                        { id: 'math-m9u-ch24-2-4', label: '24.2.4 切线长定理', file: 'content/math/middle/grade9/up/chapter24/24-2/24-2-4.md' },
                                        { id: 'math-m9u-ch24-2-5', label: '24.2.5 圆和圆的位置关系', file: 'content/math/middle/grade9/up/chapter24/24-2/24-2-5.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch24-3',
                                    label: '24.3 正多边形和圆',
                                    children: [
                                        { id: 'math-m9u-ch24-3-1', label: '24.3.1 正多边形和圆', file: 'content/math/middle/grade9/up/chapter24/24-3/24-3-1.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch24-4',
                                    label: '24.4 弧长和扇形面积',
                                    children: [
                                        { id: 'math-m9u-ch24-4-1', label: '24.4.1 弧长公式', file: 'content/math/middle/grade9/up/chapter24/24-4/24-4-1.md' },
                                        { id: 'math-m9u-ch24-4-2', label: '24.4.2 扇形面积公式', file: 'content/math/middle/grade9/up/chapter24/24-4/24-4-2.md' },
                                        { id: 'math-m9u-ch24-4-3', label: '24.4.3 弓形面积', file: 'content/math/middle/grade9/up/chapter24/24-4/24-4-3.md' },
                                        { id: 'math-m9u-ch24-4-4', label: '24.4.4 圆锥的侧面积和全面积', file: 'content/math/middle/grade9/up/chapter24/24-4/24-4-4.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch24-5',
                                    label: '24.5 圆的计算综合',
                                    children: [
                                        { id: 'math-m9u-ch24-5-1', label: '24.5.1 阴影部分面积计算', file: 'content/math/middle/grade9/up/chapter24/24-5/24-5-1.md' },
                                        { id: 'math-m9u-ch24-5-2', label: '24.5.2 圆的综合证明与计算', file: 'content/math/middle/grade9/up/chapter24/24-5/24-5-2.md' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'math-m9u-ch25',
                            label: '第二十五章 概率初步',
                            children: [
                                {
                                    id: 'math-m9u-ch25-1',
                                    label: '25.1 随机事件与概率',
                                    children: [
                                        { id: 'math-m9u-ch25-1-1', label: '25.1.1 随机事件', file: 'content/math/middle/grade9/up/chapter25/25-1/25-1-1.md' },
                                        { id: 'math-m9u-ch25-1-2', label: '25.1.2 概率的意义', file: 'content/math/middle/grade9/up/chapter25/25-1/25-1-2.md' },
                                        { id: 'math-m9u-ch25-1-3', label: '25.1.3 概率的简单计算', file: 'content/math/middle/grade9/up/chapter25/25-1/25-1-3.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch25-2',
                                    label: '25.2 用列举法求概率',
                                    children: [
                                        { id: 'math-m9u-ch25-2-1', label: '25.2.1 列表法求概率', file: 'content/math/middle/grade9/up/chapter25/25-2/25-2-1.md' },
                                        { id: 'math-m9u-ch25-2-2', label: '25.2.2 树状图法求概率', file: 'content/math/middle/grade9/up/chapter25/25-2/25-2-2.md' },
                                        { id: 'math-m9u-ch25-2-3', label: '25.2.3 用频率估计概率', file: 'content/math/middle/grade9/up/chapter25/25-2/25-2-3.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9u-ch25-3',
                                    label: '25.3 课题学习——概率的应用',
                                    children: [
                                        { id: 'math-m9u-ch25-3-1', label: '25.3.1 概率在实际生活中的应用', file: 'content/math/middle/grade9/up/chapter25/25-3/25-3-1.md' },
                                        { id: 'math-m9u-ch25-3-2', label: '25.3.2 概率与统计的综合应用', file: 'content/math/middle/grade9/up/chapter25/25-3/25-3-2.md' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'math-middle-9-down',
                    label: '九年级下册',
                    children: [
                        {
                            id: 'math-m9d-ch26',
                            label: '第二十六章 反比例函数',
                            children: [
                                {
                                    id: 'math-m9d-ch26-1',
                                    label: '26.1 反比例函数',
                                    children: [
                                        { id: 'math-m9d-ch26-1-1', label: '26.1.1 反比例函数的定义', file: 'content/math/middle/grade9/down/chapter26/26-1/26-1-1.md' },
                                        { id: 'math-m9d-ch26-1-2', label: '26.1.2 反比例函数的图象和性质（一）', file: 'content/math/middle/grade9/down/chapter26/26-1/26-1-2.md' },
                                        { id: 'math-m9d-ch26-1-3', label: '26.1.3 反比例函数的图象和性质（二）', file: 'content/math/middle/grade9/down/chapter26/26-1/26-1-3.md' },
                                        { id: 'math-m9d-ch26-1-4', label: '26.1.4 反比例函数中 k 的几何意义', file: 'content/math/middle/grade9/down/chapter26/26-1/26-1-4.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9d-ch26-2',
                                    label: '26.2 实际问题与反比例函数',
                                    children: [
                                        { id: 'math-m9d-ch26-2-1', label: '26.2.1 反比例函数与实际应用（一）', file: 'content/math/middle/grade9/down/chapter26/26-2/26-2-1.md' },
                                        { id: 'math-m9d-ch26-2-2', label: '26.2.2 反比例函数与实际应用（二）', file: 'content/math/middle/grade9/down/chapter26/26-2/26-2-2.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9d-ch26-3',
                                    label: '26.3 反比例函数与一次函数的综合',
                                    children: [
                                        { id: 'math-m9d-ch26-3-1', label: '26.3.1 反比例函数与一次函数的图象共存问题', file: 'content/math/middle/grade9/down/chapter26/26-3/26-3-1.md' },
                                        { id: 'math-m9d-ch26-3-2', label: '26.3.2 反比例函数与一次函数的交点问题', file: 'content/math/middle/grade9/down/chapter26/26-3/26-3-2.md' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'math-m9d-ch27',
                            label: '第二十七章 相似',
                            children: [
                                {
                                    id: 'math-m9d-ch27-1',
                                    label: '27.1 图形的相似',
                                    children: [
                                        { id: 'math-m9d-ch27-1-1', label: '27.1.1 相似图形', file: 'content/math/middle/grade9/down/chapter27/27-1/27-1-1.md' },
                                        { id: 'math-m9d-ch27-1-2', label: '27.1.2 相似多边形', file: 'content/math/middle/grade9/down/chapter27/27-1/27-1-2.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9d-ch27-2',
                                    label: '27.2 相似三角形',
                                    children: [
                                        { id: 'math-m9d-ch27-2-1', label: '27.2.1 平行线分线段成比例', file: 'content/math/middle/grade9/down/chapter27/27-2/27-2-1.md' },
                                        { id: 'math-m9d-ch27-2-2', label: '27.2.2 相似三角形的判定（一）——AA', file: 'content/math/middle/grade9/down/chapter27/27-2/27-2-2.md' },
                                        { id: 'math-m9d-ch27-2-3', label: '27.2.3 相似三角形的判定（二）——SAS 和 SSS', file: 'content/math/middle/grade9/down/chapter27/27-2/27-2-3.md' },
                                        { id: 'math-m9d-ch27-2-4', label: '27.2.4 相似三角形的性质', file: 'content/math/middle/grade9/down/chapter27/27-2/27-2-4.md' },
                                        { id: 'math-m9d-ch27-2-5', label: '27.2.5 相似三角形的实际应用', file: 'content/math/middle/grade9/down/chapter27/27-2/27-2-5.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9d-ch27-3',
                                    label: '27.3 位似',
                                    children: [
                                        { id: 'math-m9d-ch27-3-1', label: '27.3.1 位似图形', file: 'content/math/middle/grade9/down/chapter27/27-3/27-3-1.md' },
                                        { id: 'math-m9d-ch27-3-2', label: '27.3.2 位似作图', file: 'content/math/middle/grade9/down/chapter27/27-3/27-3-2.md' },
                                        { id: 'math-m9d-ch27-3-3', label: '27.3.3 相似与位似的综合应用', file: 'content/math/middle/grade9/down/chapter27/27-3/27-3-3.md' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'math-m9d-ch28',
                            label: '第二十八章 锐角三角函数',
                            children: [
                                {
                                    id: 'math-m9d-ch28-1',
                                    label: '28.1 锐角三角函数',
                                    children: [
                                        { id: 'math-m9d-ch28-1-1', label: '28.1.1 正弦', file: 'content/math/middle/grade9/down/chapter28/28-1/28-1-1.md' },
                                        { id: 'math-m9d-ch28-1-2', label: '28.1.2 余弦和正切', file: 'content/math/middle/grade9/down/chapter28/28-1/28-1-2.md' },
                                        { id: 'math-m9d-ch28-1-3', label: '28.1.3 特殊角的三角函数值', file: 'content/math/middle/grade9/down/chapter28/28-1/28-1-3.md' },
                                        { id: 'math-m9d-ch28-1-4', label: '28.1.4 锐角三角函数的增减性与互余关系', file: 'content/math/middle/grade9/down/chapter28/28-1/28-1-4.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9d-ch28-2',
                                    label: '28.2 解直角三角形及其应用',
                                    children: [
                                        { id: 'math-m9d-ch28-2-1', label: '28.2.1 解直角三角形', file: 'content/math/middle/grade9/down/chapter28/28-2/28-2-1.md' },
                                        { id: 'math-m9d-ch28-2-2', label: '28.2.2 仰角与俯角', file: 'content/math/middle/grade9/down/chapter28/28-2/28-2-2.md' },
                                        { id: 'math-m9d-ch28-2-3', label: '28.2.3 坡度与方向角', file: 'content/math/middle/grade9/down/chapter28/28-2/28-2-3.md' },
                                        { id: 'math-m9d-ch28-2-4', label: '28.2.4 解直角三角形的综合应用', file: 'content/math/middle/grade9/down/chapter28/28-2/28-2-4.md' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'math-m9d-ch29',
                            label: '第二十九章 投影与视图',
                            children: [
                                {
                                    id: 'math-m9d-ch29-1',
                                    label: '29.1 投影',
                                    children: [
                                        { id: 'math-m9d-ch29-1-1', label: '29.1.1 平行投影与中心投影', file: 'content/math/middle/grade9/down/chapter29/29-1/29-1-1.md' },
                                        { id: 'math-m9d-ch29-1-2', label: '29.1.2 正投影', file: 'content/math/middle/grade9/down/chapter29/29-1/29-1-2.md' }
                                    ]
                                },
                                {
                                    id: 'math-m9d-ch29-2',
                                    label: '29.2 三视图',
                                    children: [
                                        { id: 'math-m9d-ch29-2-1', label: '29.2.1 三视图的概念与画法', file: 'content/math/middle/grade9/down/chapter29/29-2/29-2-1.md' },
                                        { id: 'math-m9d-ch29-2-2', label: '29.2.2 由三视图还原几何体', file: 'content/math/middle/grade9/down/chapter29/29-2/29-2-2.md' },
                                        { id: 'math-m9d-ch29-2-3', label: '29.2.3 组合体的三视图', file: 'content/math/middle/grade9/down/chapter29/29-2/29-2-3.md' },
                                        { id: 'math-m9d-ch29-2-4', label: '29.2.4 用小正方体搭几何体', file: 'content/math/middle/grade9/down/chapter29/29-2/29-2-4.md' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        /* 生物
        {
            id: 'biology',
            label: '生物',
            children: [
                {
                    id: 'bio-middle-7-up',
                    label: '七年级上册',
                    children: [
                        { id: 'bio-m7u-ch1', label: '第一章 认识生物', file: 'content/biology/middle/grade7/up/chapter1.md' },
                        { id: 'bio-m7u-ch2', label: '第二章 了解生物圈', file: 'content/biology/middle/grade7/up/chapter2.md' },
                        { id: 'bio-m7u-ch3', label: '第三章 细胞是生命活动的基本单位', file: 'content/biology/middle/grade7/up/chapter3.md' },
                        { id: 'bio-m7u-ch4', label: '第四章 细胞怎样构成生物体', file: 'content/biology/middle/grade7/up/chapter4.md' }
                    ]
                },
                {
                    id: 'bio-middle-7-down',
                    label: '七年级下册',
                    children: [
                        { id: 'bio-m7d-ch1', label: '第一章 人的由来', file: 'content/biology/middle/grade7/down/chapter1.md' },
                        { id: 'bio-m7d-ch2', label: '第二章 人体的营养', file: 'content/biology/middle/grade7/down/chapter2.md' },
                        { id: 'bio-m7d-ch3', label: '第三章 人体的呼吸', file: 'content/biology/middle/grade7/down/chapter3.md' },
                        { id: 'bio-m7d-ch4', label: '第四章 人体内物质的运输', file: 'content/biology/middle/grade7/down/chapter4.md' },
                        { id: 'bio-m7d-ch5', label: '第五章 人体内废物的排出', file: 'content/biology/middle/grade7/down/chapter5.md' }
                    ]
                },
                {
                    id: 'bio-middle-8-up',
                    label: '八年级上册',
                    children: [
                        { id: 'bio-m8u-ch1', label: '第一章 动物的运动和行为', file: 'content/biology/middle/grade8/up/chapter1.md' },
                        { id: 'bio-m8u-ch2', label: '第二章 动物在生物圈中的作用', file: 'content/biology/middle/grade8/up/chapter2.md' },
                        { id: 'bio-m8u-ch3', label: '第三章 分布广泛的细菌和真菌', file: 'content/biology/middle/grade8/up/chapter3.md' },
                        { id: 'bio-m8u-ch4', label: '第四章 保护生物的多样性', file: 'content/biology/middle/grade8/up/chapter4.md' }
                    ]
                },
                {
                    id: 'bio-middle-8-down',
                    label: '八年级下册',
                    children: [
                        { id: 'bio-m8d-ch1', label: '第一章 生物的生殖和发育', file: 'content/biology/middle/grade8/down/chapter1.md' },
                        { id: 'bio-m8d-ch2', label: '第二章 生物的遗传和变异', file: 'content/biology/middle/grade8/down/chapter2.md' },
                        { id: 'bio-m8d-ch3', label: '第三章 生物的进化', file: 'content/biology/middle/grade8/down/chapter3.md' },
                        { id: 'bio-m8d-ch4', label: '第四章 传染病和免疫', file: 'content/biology/middle/grade8/down/chapter4.md' },
                        { id: 'bio-m8d-ch5', label: '第五章 用药与急救', file: 'content/biology/middle/grade8/down/chapter5.md' }
                    ]
                }
            ]
        },
        生物结束 */
        /* 地理
        {
            id: 'geography',
            label: '地理',
            children: [
                {
                    id: 'geo-middle-7-up',
                    label: '七年级上册',
                    children: [
                        { id: 'geo-m7u-ch1', label: '第一章 地球和地图', file: 'content/geography/middle/grade7/up/chapter1.md' },
                        { id: 'geo-m7u-ch2', label: '第二章 陆地和海洋', file: 'content/geography/middle/grade7/up/chapter2.md' },
                        { id: 'geo-m7u-ch3', label: '第三章 天气与气候', file: 'content/geography/middle/grade7/up/chapter3.md' },
                        { id: 'geo-m7u-ch4', label: '第四章 居民与聚落', file: 'content/geography/middle/grade7/up/chapter4.md' },
                        { id: 'geo-m7u-ch5', label: '第五章 发展与合作', file: 'content/geography/middle/grade7/up/chapter5.md' }
                    ]
                },
                {
                    id: 'geo-middle-7-down',
                    label: '七年级下册',
                    children: [
                        { id: 'geo-m7d-ch1', label: '第一章 我们生活的大洲——亚洲', file: 'content/geography/middle/grade7/down/chapter1.md' },
                        { id: 'geo-m7d-ch2', label: '第二章 我们邻近的地区和国家', file: 'content/geography/middle/grade7/down/chapter2.md' },
                        { id: 'geo-m7d-ch3', label: '第三章 东半球其他的地区和国家', file: 'content/geography/middle/grade7/down/chapter3.md' },
                        { id: 'geo-m7d-ch4', label: '第四章 西半球的国家', file: 'content/geography/middle/grade7/down/chapter4.md' },
                        { id: 'geo-m7d-ch5', label: '第五章 极地地区', file: 'content/geography/middle/grade7/down/chapter5.md' }
                    ]
                },
                {
                    id: 'geo-middle-8-up',
                    label: '八年级上册',
                    children: [
                        { id: 'geo-m8u-ch1', label: '第一章 从世界看中国', file: 'content/geography/middle/grade8/up/chapter1.md' },
                        { id: 'geo-m8u-ch2', label: '第二章 中国的自然环境', file: 'content/geography/middle/grade8/up/chapter2.md' },
                        { id: 'geo-m8u-ch3', label: '第三章 中国的自然资源', file: 'content/geography/middle/grade8/up/chapter3.md' },
                        { id: 'geo-m8u-ch4', label: '第四章 中国的经济发展', file: 'content/geography/middle/grade8/up/chapter4.md' }
                    ]
                },
                {
                    id: 'geo-middle-8-down',
                    label: '八年级下册',
                    children: [
                        { id: 'geo-m8d-ch1', label: '第一章 中国的地理差异', file: 'content/geography/middle/grade8/down/chapter1.md' },
                        { id: 'geo-m8d-ch2', label: '第二章 认识省级区域', file: 'content/geography/middle/grade8/down/chapter2.md' },
                        { id: 'geo-m8d-ch3', label: '第三章 认识省内区域', file: 'content/geography/middle/grade8/down/chapter3.md' },
                        { id: 'geo-m8d-ch4', label: '第四章 认识跨省区域', file: 'content/geography/middle/grade8/down/chapter4.md' }
                    ]
                }
            ]
        }
        地理结束 */
    ]
};

const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const treeNav = document.getElementById('treeNav');
const contentBody = document.getElementById('contentBody');
const mainContent = document.getElementById('mainContent');
const searchInput = document.getElementById('searchInput');
const themeBtn = document.getElementById('themeBtn');

let currentActiveId = null;
let cookieAllowed = localStorage.getItem('zyaoa_cookie_consent');
let completedItems = [];

if (cookieAllowed === 'allowed') {
    completedItems = JSON.parse(localStorage.getItem('zyaoa_completed') || '[]');
}

// Cookie consent banner
const cookieBanner = document.getElementById('cookieBanner');
const cookieAllowBtn = document.getElementById('cookieAllow');
const cookieDenyBtn = document.getElementById('cookieDeny');

if (!cookieAllowed) {
    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 1000);
}

cookieAllowBtn.addEventListener('click', () => {
    localStorage.setItem('zyaoa_cookie_consent', 'allowed');
    cookieAllowed = 'allowed';
    completedItems = JSON.parse(localStorage.getItem('zyaoa_completed') || '[]');
    cookieBanner.classList.remove('show');
    refreshTreeStatus();
});

cookieDenyBtn.addEventListener('click', () => {
    localStorage.setItem('zyaoa_cookie_consent', 'denied');
    cookieAllowed = 'denied';
    completedItems = [];
    cookieBanner.classList.remove('show');
});

function renderTree(data, container, level = 0) {
    data.forEach(item => {
        const treeItem = document.createElement('div');
        treeItem.className = 'tree-item';
        treeItem.dataset.id = item.id;

        const header = document.createElement('div');
        header.className = 'tree-header';

        const toggle = document.createElement('span');
        toggle.className = 'tree-toggle' + (item.children ? '' : ' leaf');
        toggle.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>';

        const icon = document.createElement('span');
        icon.className = 'tree-icon';
        icon.textContent = item.icon || '';

        const label = document.createElement('span');
        label.className = 'tree-label';
        label.textContent = item.label;

        header.appendChild(toggle);
        if (item.icon) header.appendChild(icon);
        header.appendChild(label);

        if (completedItems.includes(item.id)) {
            const status = document.createElement('span');
            status.className = 'tree-status';
            status.textContent = '已完成';
            header.appendChild(status);
        }

        treeItem.appendChild(header);

        if (item.children) {
            const childrenContainer = document.createElement('div');
            childrenContainer.className = 'tree-children';
            renderTree(item.children, childrenContainer, level + 1);
            treeItem.appendChild(childrenContainer);

            header.addEventListener('click', () => {
                const isExpanded = childrenContainer.classList.contains('expanded');
                childrenContainer.classList.toggle('expanded');
                toggle.classList.toggle('expanded');
            });
        } else if (item.file) {
            header.addEventListener('click', () => {
                loadContent(item);
            });
        } else if (item.isHome) {
            header.addEventListener('click', () => {
                document.querySelectorAll('.tree-header').forEach(h => h.classList.remove('active'));
                header.classList.add('active');
                contentBody.innerHTML = `
                    <div class="welcome-page" id="welcomePage">
                        <div class="welcome-top">
                            <h1>Zyaoa-Study</h1>
                            <p class="welcome-slogan">人人都用得起的免费学习站</p>
                        </div>
                        <div class="welcome-meta">
                            <span>数学</span>
                            <span class="meta-sep">|</span>
                            <span>7~9年级</span>
                            <span class="meta-sep">|</span>
                            <span>永久免费 · 无广告 · 开源</span>
                        </div>
                        <div class="subject-cards">
                            <div class="subject-card" data-subject="math">
                                <div class="card-main">
                                    <span class="card-title">数学</span>
                                    <span class="card-range">7~9年级 | 人教版</span>
                                </div>
                                <div class="card-progress">已读 <span class="progress-count" data-subject="math">0</span>/<span class="progress-total" data-subject="math">46</span></div>
                            </div>
                        </div>
                        <div class="welcome-footer">
                            <div class="footer-meta">
                                <span>Github仓库：<a href="https://github.com/itnproject/Zyaoa-Study" target="_blank">https://github.com/itnproject/Zyaoa-Study</a></span>
                            </div>
                            <div class="footer-meta">
                                <span>Zyaoa-Study（Study.zyaoa.com）代码遵循AGPL 3.0协议，文章遵循 CC BY-NC-SA 4.0 协议，禁止商业使用</span>
                            </div>
                            <div class="footer-meta">
                                <span>教材为2024新版，不保证内容与课本一致，由 AI 辅助整理</span>
                            </div>
                        </div>
                    </div>
                `;
                updateProgressCounts();
            });
        }

        container.appendChild(treeItem);
    });
}

let currentScrollHandler = null;
let currentItemId = null;

function loadContent(item) {
    document.querySelectorAll('.tree-header').forEach(h => h.classList.remove('active'));
    const header = document.querySelector(`[data-id="${item.id}"] .tree-header`);
    if (header) header.classList.add('active');

    currentActiveId = item.id;
    currentItemId = item.id;

    mainContent.scrollTop = 0;

    if (currentScrollHandler) {
        mainContent.removeEventListener('scroll', currentScrollHandler);
        currentScrollHandler = null;
    }

    const itemId = item.id;

    function convertMathSymbols(text) {
        text = text.replace(/√\(([^)]+)\)/g, '$\\sqrt{$1}$');
        text = text.replace(/√(\d+)/g, '$\\sqrt{$1}$');
        text = text.replace(/√([a-zA-Z0-9]+)/g, '$\\sqrt{$1}$');
        
        text = text.replace(/²/g, '$^2$');
        text = text.replace(/³/g, '$^3$');
        
        text = text.replace(/([a-zA-Z])₁/g, '$$1_1$');
        text = text.replace(/([a-zA-Z])₂/g, '$$1_2$');
        text = text.replace(/([a-zA-Z])₃/g, '$$1_3$');
        text = text.replace(/([a-zA-Z])₄/g, '$$1_4$');
        text = text.replace(/([a-zA-Z])₅/g, '$$1_5$');
        text = text.replace(/([a-zA-Z])ₙ/g, '$$1_n$');
        
        text = text.replace(/([a-zA-Z])̄/g, '$\\bar{$1}$');
        
        text = text.replace(/×/g, '$\\times$');
        text = text.replace(/÷/g, '$\\div$');
        text = text.replace(/≈/g, '$\\approx$');
        text = text.replace(/≤/g, '$\\leq$');
        text = text.replace(/≥/g, '$\\geq$');
        text = text.replace(/≠/g, '$\\neq$');
        text = text.replace(/±/g, '$\\pm$');
        
        text = text.replace(/π/g, '$\\pi$');
        text = text.replace(/∞/g, '$\\infty$');
        text = text.replace(/∠/g, '$\\angle$');
        text = text.replace(/°/g, '$^\\circ$');
        text = text.replace(/∥/g, '$\\parallel$');
        text = text.replace(/⊥/g, '$\\perp$');
        text = text.replace(/△/g, '$\\triangle$');
        text = text.replace(/□/g, '$\\square$');
        text = text.replace(/∵/g, '$\\because$');
        text = text.replace(/∴/g, '$\\therefore$');
        
        return text;
    }

    fetch(item.file)
        .then(response => {
            if (!response.ok) throw new Error('文件不存在');
            return response.text();
        })
        .then(markdown => {
            if (currentItemId !== itemId) {
                return;
            }

            const convertedMarkdown = convertMathSymbols(markdown);
            const htmlContent = marked.parse(convertedMarkdown);
            contentBody.innerHTML = `
                <div class="content-article">
                    ${htmlContent}
                    <div class="article-footer">
                        <p>作者：itnproject · Zyaoa-Study（Study.zyaoa.com）内容遵循 CC BY-NC-SA 4.0 协议，禁止商业使用</p>
                        <p><em>教材为2024新版，不保证内容与课本一致，由 AI 辅助整理</em></p>
                    </div>
                </div>
            `;
            contentBody.scrollTop = 0;

            if (typeof renderMathInElement === 'function') {
                renderMathInElement(contentBody, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\[', right: '\\]', display: true},
                        {left: '\\(', right: '\\)', display: false}
                    ],
                    throwOnError: false
                });
            }

            if (currentScrollHandler) {
                mainContent.removeEventListener('scroll', currentScrollHandler);
            }

            const checkScroll = () => {
                if (currentItemId !== itemId) {
                    mainContent.removeEventListener('scroll', checkScroll);
                    return;
                }

                const scrollTop = mainContent.scrollTop;
                const scrollHeight = mainContent.scrollHeight;
                const clientHeight = mainContent.clientHeight;
                if (scrollTop + clientHeight >= scrollHeight - 50) {
                    if (cookieAllowed === 'allowed' && !completedItems.includes(itemId)) {
                        completedItems.push(itemId);
                        localStorage.setItem('zyaoa_completed', JSON.stringify(completedItems));
                        refreshTreeStatus();
                    }
                    mainContent.removeEventListener('scroll', checkScroll);
                    currentScrollHandler = null;
                }
            };
            currentScrollHandler = checkScroll;
            mainContent.addEventListener('scroll', checkScroll);
        })
        .catch(error => {
            if (currentItemId !== itemId) {
                return;
            }
            contentBody.innerHTML = `
                <div class="content-article">
                    <h1>${item.label}</h1>
                    <p>内容准备中，请稍候...</p>
                </div>
            `;
        });
}

function refreshTreeStatus() {
    document.querySelectorAll('.tree-status').forEach(el => el.remove());
    completedItems.forEach(id => {
        const header = document.querySelector(`[data-id="${id}"] .tree-header`);
        if (header && !header.querySelector('.tree-status')) {
            const status = document.createElement('span');
            status.className = 'tree-status';
            status.textContent = '已完成';
            header.appendChild(status);
        }
    });
}

function searchCourses(query) {
    const results = [];
    function search(data, path = []) {
        data.forEach(item => {
            const currentPath = [...path, item.label];
            if (item.label.toLowerCase().includes(query.toLowerCase())) {
                results.push({...item, path: currentPath});
            }
            if (item.children) search(item.children, currentPath);
        });
    }
    search(courseData.children);
    return results;
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (!query) {
        treeNav.innerHTML = '';
        renderTree(courseData.children, treeNav);
        return;
    }

    const results = searchCourses(query);
    treeNav.innerHTML = `<div class="search-results-info">找到 ${results.filter(r => r.file).length} 个结果</div>`;
    results.forEach(item => {
        if (!item.children && item.file) {
            const treeItem = document.createElement('div');
            treeItem.className = 'tree-item';
            const header = document.createElement('div');
            header.className = 'tree-header';
            const pathText = item.path ? item.path.join(' > ') : item.label;
            header.innerHTML = `
                <span class="tree-toggle leaf"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></span>
                <span class="tree-label">${pathText}</span>
            `;
            header.addEventListener('click', () => loadContent(item));
            treeItem.appendChild(header);
            treeNav.appendChild(treeItem);
        }
    });
});

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

document.getElementById('mainContent').addEventListener('click', () => {
    if (window.innerWidth <= 768 && !sidebar.classList.contains('collapsed')) {
        sidebar.classList.add('collapsed');
    }
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('zyaoa_dark_mode', document.body.classList.contains('dark-mode'));
});

if (localStorage.getItem('zyaoa_dark_mode') === 'true') {
    document.body.classList.add('dark-mode');
}

function updateProgressCounts() {
    ['math', 'biology', 'geography'].forEach(subject => {
        const countEl = document.querySelector(`.progress-count[data-subject="${subject}"]`);
        const totalEl = document.querySelector(`.progress-total[data-subject="${subject}"]`);
        if (!countEl || !totalEl) return;
        let count = 0;
        let total = 0;
        function countItems(data) {
            data.forEach(item => {
                if (item.file) {
                    total++;
                    if (completedItems.includes(item.id)) count++;
                }
                if (item.children) countItems(item.children);
            });
        }
        const subjectData = courseData.children.find(c => c.id === subject);
        if (subjectData) {
            countItems(subjectData.children);
            countEl.textContent = count;
            totalEl.textContent = total;
        }
    });
}

renderTree(courseData.children, treeNav);
updateProgressCounts();

setTimeout(() => {
    const homeHeader = document.querySelector('[data-id="home"] .tree-header');
    if (homeHeader) {
        homeHeader.classList.add('active');
        homeHeader.click();
    }
}, 0);