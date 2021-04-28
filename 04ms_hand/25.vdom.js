



// 这部分 展示的是用 js来模拟 DOM 结构的方法 

// 原来dom结构为 
<div id='div1' class = 'container'>
    <p>vdom</p>
    <ul  style='font-size:20px'>
        <li>a</li>
    </ul>
</div>

// 使用 js进行模拟   不困难 很重要  多练几遍就好了 ！

{
    tag : 'div',
    props : {
        className : 'container',
        id : 'div1'
    }

    children : [
        {
            tag : 'p',
            children : 'vdom'
        },
        {
            tag : 'ul',
            props : {
                style : 'font-size : 20px'
            },
            children : [
                {
                    tag : 'li',
                    children : 'a'
                }
            ]
        }
    ]
}


