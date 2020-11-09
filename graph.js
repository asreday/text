option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            symbol:'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjA0OTI3NjgzNTU0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwOS4zIDUwNS4ybS0zNDQuMyAwYTM0NC4zIDM0NC4zIDAgMSAwIDY4OC42IDAgMzQ0LjMgMzQ0LjMgMCAxIDAtNjg4LjYgMFoiIGZpbGw9IiMxMjk2ZGIiIHAtaWQ9IjExNjciPjwvcGF0aD48cGF0aCBkPSJNOTgzLjYgMzEyLjZDOTU3LjkgMjUxLjcgOTIxIDE5NyA4NzQuMSAxNTAuMWMtNDYuOS00Ni45LTEwMS42LTgzLjgtMTYyLjUtMTA5LjYtNjMtMjYuNy0xMzAtNDAuMi0xOTktNDAuMnMtMTM2IDEzLjUtMTk5IDQwLjJDMjUyLjcgNjYuMyAxOTggMTAzLjEgMTUxIDE1MC4xIDEwNC4xIDE5NyA2Ny4yIDI1MS43IDQxLjUgMzEyLjZjLTI2LjcgNjMtNDAuMiAxMzAtNDAuMiAxOTlzMTMuNSAxMzYgNDAuMiAxOTljMjUuOCA2MC45IDYyLjYgMTE1LjYgMTA5LjYgMTYyLjVDMTk4IDkyMCAyNTIuNyA5NTYuOSAzMTMuNiA5ODIuN2M2MyAyNi43IDEzMCA0MC4yIDE5OSA0MC4yczEzNi0xMy41IDE5OS00MC4yYzYwLjktMjUuOCAxMTUuNi02Mi42IDE2Mi41LTEwOS42IDQ2LjktNDYuOSA4My44LTEwMS42IDEwOS42LTE2Mi41IDI2LjctNjMgNDAuMi0xMzAgNDAuMi0xOTlzLTEzLjYtMTM2LTQwLjMtMTk5eiBtLTQ3MSA2NzAuMmMtMjU5LjkgMC00NzEuMy0yMTEuNC00NzEuMy00NzEuM1MyNTIuNyA0MC4yIDUxMi42IDQwLjJzNDcxLjMgMjExLjQgNDcxLjMgNDcxLjNjLTAuMSAyNTkuOS0yMTEuNSA0NzEuMy00NzEuMyA0NzEuM3oiIGZpbGw9IiMxMjk2ZGIiIHAtaWQ9IjExNjgiPjwvcGF0aD48L3N2Zz4='
,           orient: 'vertical',
            roam: true,
            label: {
                show: true,
                type:''
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                name: '节点1',
                x: 300,
                y: 300,
                symbol:'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjA0OTI3NjgzNTU0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwOS4zIDUwNS4ybS0zNDQuMyAwYTM0NC4zIDM0NC4zIDAgMSAwIDY4OC42IDAgMzQ0LjMgMzQ0LjMgMCAxIDAtNjg4LjYgMFoiIGZpbGw9IiMxMjk2ZGIiIHAtaWQ9IjExNjciPjwvcGF0aD48cGF0aCBkPSJNOTgzLjYgMzEyLjZDOTU3LjkgMjUxLjcgOTIxIDE5NyA4NzQuMSAxNTAuMWMtNDYuOS00Ni45LTEwMS42LTgzLjgtMTYyLjUtMTA5LjYtNjMtMjYuNy0xMzAtNDAuMi0xOTktNDAuMnMtMTM2IDEzLjUtMTk5IDQwLjJDMjUyLjcgNjYuMyAxOTggMTAzLjEgMTUxIDE1MC4xIDEwNC4xIDE5NyA2Ny4yIDI1MS43IDQxLjUgMzEyLjZjLTI2LjcgNjMtNDAuMiAxMzAtNDAuMiAxOTlzMTMuNSAxMzYgNDAuMiAxOTljMjUuOCA2MC45IDYyLjYgMTE1LjYgMTA5LjYgMTYyLjVDMTk4IDkyMCAyNTIuNyA5NTYuOSAzMTMuNiA5ODIuN2M2MyAyNi43IDEzMCA0MC4yIDE5OSA0MC4yczEzNi0xMy41IDE5OS00MC4yYzYwLjktMjUuOCAxMTUuNi02Mi42IDE2Mi41LTEwOS42IDQ2LjktNDYuOSA4My44LTEwMS42IDEwOS42LTE2Mi41IDI2LjctNjMgNDAuMi0xMzAgNDAuMi0xOTlzLTEzLjYtMTM2LTQwLjMtMTk5eiBtLTQ3MSA2NzAuMmMtMjU5LjkgMC00NzEuMy0yMTEuNC00NzEuMy00NzEuM1MyNTIuNyA0MC4yIDUxMi42IDQwLjJzNDcxLjMgMjExLjQgNDcxLjMgNDcxLjNjLTAuMSAyNTkuOS0yMTEuNSA0NzEuMy00NzEuMyA0NzEuM3oiIGZpbGw9IiMxMjk2ZGIiIHAtaWQ9IjExNjgiPjwvcGF0aD48L3N2Zz4='
            }, {
                name: '节点2',
                x: 800,
                y: 300
            }, {
                name: '节点3',
                x: 550,
                y: 100
            }, {
                name: '节点4',
                x: 550,
                y: 500
            }],
            // links: [],
            links: [{
                source: '节点1',
                target: '节点2'
            },{
                source: '节点1',
                target: '节点4'
            }, {
                source: '节点1',
                target: '节点3'
            }],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    ]
};
