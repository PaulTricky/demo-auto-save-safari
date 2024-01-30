import CreatePasswordForm from "@/domains/Onboarding/components/CreatePasswordForm"
import { useRouter } from "next/router"

export default () => {

  const router = useRouter();

  return (
    <CreatePasswordForm isTestAutoSaved onNextStep={() => router.push('/home')} />
  )
}