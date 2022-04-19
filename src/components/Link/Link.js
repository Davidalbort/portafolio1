
function Link ({listLink,typeList}){
    const createListLink = listLink.map(link => <a href={`#${link}`}>{link}</a>)
    let createTypeList = typeList === 'ol' ? <ol>{createListLink}</ol>:
                       typeList === 'ul' ? <ul>{createListLink}</ul>:
                       <li>{createListLink}</li>
    return(
        <div className="container-link">
            {createTypeList}
        </div>
    )
}

Link.defaultProps ={
    listLink: [''],
    typeList:''
}

export {Link};