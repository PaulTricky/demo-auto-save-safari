import Button from "@/components/Button/Button"
import { useRouter } from "next/router"

export default () => {
  const router = useRouter();
  return <div >
    Home Page
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '300px',
      padding: '10px'
    }}>
      <Button type="link" onClick={() => router.push('/auto-save')}>Test Auto Save Password</Button>
      <Button type="primary"  onClick={() => router.push('/not-auto-save')}>Test Not Auto Save Password</Button>
    </div>
    </div>
}