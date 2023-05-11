import {useRouter} from 'next/router';

export default function Contactİd() {
    const router = useRouter();
    //создаем экземпляр useRouter который предоставляет данные о параметрах данного маршрута  
    const {id} = router.query;
    //извлекаем id из объекта query, расположенного в объекте в экземпляре  useRouter

  return (
    <div>
        <p>
            At ID number: {id}
            {/* отображаем полученный ID */}
        </p>
        </div>
  )
}
