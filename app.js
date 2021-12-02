console.log('hola')

// let subrayado =  document.querySelectorAll('.subrayado');
let conjuntoancla = document.querySelectorAll('.conjunto-ancla');
let glass = document.querySelector('.glass')
const arrMenu = [['00','Home'],['01','Destination'],['02','Crew'],['03','Technology']]

addFrag(glass,addString(arrMenu))
addListener()

function addListener () {
    for(let i = 0; i <= 3;i ++){
        let element = document.getElementById(`conjunto${i}`)
        let subrayado = document.getElementById(`subrayado${i}`)
        let itemMenu = document.getElementById(`itemMenu${i}`)
        element.addEventListener('mouseover', () => {
            subrayado.style.visibility='visible'
            itemMenu.style.fontWeight= '700';
        })
        element.addEventListener('mouseout', () => {
            subrayado.style.visibility='hidden'
            itemMenu.style.fontWeight= 'normal';
        })
        
    }
}

function addString(arr){
    let str = ''
    arr.map((element,item)=>{
        str += ` <div class="conjunto-ancla" id = "conjunto${item}">
                        <a >
                            <div class="menu-num">
                                <p><span>${element[0]}</span></p>
                                <p id="itemMenu${item}">${element[1]}</p>
                            </div>
                        </a>
                    <div class="subrayado " id = "subrayado${item}"></div>   
                </div>`;
    })
    return(str)
}

function addFrag(contenedorLista, str){
    let node = document.createRange();
    let frag = node.createContextualFragment(str);
    contenedorLista.appendChild(frag);
}