import React, {  useEffect, useState } from 'react'
import { DButton } from '@dl/common'
function useToolsModule() {
    const [toolsModule, setToolsModule] = useState();
    useEffect(() => {
      // 导入，异步promise返回
      System.import("@dl/common").then(setToolsModule);
    }, []);
    return toolsModule;
}
 const Home = () => {
    // 自定义钩子函数
    var back = "";
    // 调用钩子函数
    const toolsModule = useToolsModule();
    if (toolsModule) {
        // 调用共享逻辑的方法
        back = (toolsModule as any)?.publicApiFunction('dongli');
    }

    return (
        <div>
           <DButton className={'dl'}>什么是快乐星球{back}</DButton>
        </div>
    )
    
}

export default Home;