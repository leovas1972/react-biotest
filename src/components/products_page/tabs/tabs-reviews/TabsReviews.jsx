import img1 from './../../../../img/revies/BSMPn2.jpg'
import img2 from './../../../../img/revies/GKB_6_Krasnoyarsk.jpg'
import img3 from './../../../../img/revies/KGB_Novosibirsk.jpg'
import m1 from './../../../../img/revies/markov/markov-1.jpg'
import m2 from './../../../../img/revies/markov/markov-2.jpg'
import k1 from './../../../../img/revies/krasnojarsk/krasnoyrsk_1.jpg'
import k2 from './../../../../img/revies/krasnojarsk/kracnoyrsk-2jpg.jpg'
import y1 from './../../../../img/revies/yroho/yrocho-1.jpg'
import y2 from './../../../../img/revies/yroho/yrocho-2jpg.jpg'


const TabsReviews = () => {
    return (<main className='main'>
        <div className='container'>
            <ul>
                <li><a href={img1}>БСМП №2, Новосибирск</a></li>
                <li><a href={img2}>ГКБ №6, Красноярск</a></li>
                <li><a href={img3}>ГКБ №1, Новосибирск</a></li>
                <li>Марков В.А., профессор, д.м.н., зав. кафедрой кардиологии ФПК и ППС СибГМУ, руководитель отделения неотложной кардиологии НИИ кардиологии СО РАМН, г. Томск <a href={m2}>1 стр.</a><a href={m1}>2 стр.</a></li>
                <li>Шульман В.А.,профессор, д.м.н., заслуженный врач РФ, зав. кафедрой внутренних болезней №1 КрасГМУ, руководитель Красноярского кардиологического центра, г. Красноярск <a href={k1}>1 стр.</a><a href={k2}>2 стр.</a></li>
                <li>Ярохно Н.Н., д.м.н., главный внештатный кардиолог г. Новосибирска, доцент кафедры неотложной терапии ФПК и ППВ НГМУ <a href={y1}>1 стр.</a><a href={y2}>2 стр.</a></li>
            </ul>

        </div>
    </main >)
}

export default TabsReviews