// src/components/ChallengeCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ChallengeCardProps {
  title: string
  description: string
  onClick: () => void
  color?: string
  disabled?: boolean
}

export function ChallengeCard({
  title,
  description,
  onClick,
  color = 'bg-primary',
  disabled = false
}: ChallengeCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={onClick}
          className={`w-full ${color}`}
          disabled={disabled}
        >
          Select
        </Button>
      </CardContent>
    </Card>
  )
}

// Add this if you want default export
export default ChallengeCard