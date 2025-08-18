import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ChallengeHome = () => {
  const navigate = useNavigate();

  const challengeModes = [
    {
      title: 'Challenge Yourself',
      description: 'Test your knowledge at your own pace',
      onClick: () => navigate('/challenge/self'),
      color: 'bg-primary hover:bg-primary/90'
    },
    {
      title: 'Challenge with Friend',
      description: 'Coming Soon - Compete with friends',
      onClick: () => navigate('/challenge/coming-soon'),
      color: 'bg-secondary hover:bg-secondary/80',
      disabled: true
    },
    {
      title: 'Mid Challenge',
      description: 'Coming Soon - Global competition',
      onClick: () => navigate('/challenge/coming-soon'),
      color: 'bg-accent hover:bg-accent/90',
      disabled: true
    },
    {
      title: 'Final Challenge',
      description: 'Coming Soon - Ultimate test',
      onClick: () => navigate('/challenge/coming-soon'),
      color: 'bg-destructive hover:bg-destructive/90',
      disabled: true
    }
  ];

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Knowledge Challenge</h1>
        <p className="text-center mb-8 text-muted-foreground">
          Select a challenge mode to test your knowledge across various subjects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengeModes.map((mode, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{mode.title}</CardTitle>
                <CardDescription>{mode.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={mode.onClick}
                  className={`w-full ${mode.color}`}
                  disabled={mode.disabled}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeHome;