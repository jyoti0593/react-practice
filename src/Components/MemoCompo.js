import React from 'react'

function MemoCompo({name}) {
    console.log('Rendering Memo Componnet')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoCompo)
