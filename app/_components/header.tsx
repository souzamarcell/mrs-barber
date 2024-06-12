import Image from 'next/image'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Button } from '@/app/_components/ui/button'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  return (
    <Card>
      {/* <CardContent className="p-5 justify-between items-center flex flex-row"> */}
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="MRS Barber" height={18} width={120} />
        <Button variant="outline" size="icon" className="h-8 w-6">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header