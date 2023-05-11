import {useRouter} from 'next/router';

export default function Contactİd() {
    const router = useRouter();
    const {id} = router.query;

  return (
    <div>
        <p>
            At a specific contacts
        </p>
        </div>
  )
}
