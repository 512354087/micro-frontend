// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction(str:string) {
    console.log('公共模块导出', str)
    return 'happy star 之 快乐的源泉'+ str
}
