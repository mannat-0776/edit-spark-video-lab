
import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { Coins, User, Settings, LogOut, Crown } from 'lucide-react';

const Header = () => {
  const [credits] = useState(50);

  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MF</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">MagicFrame Ai</h1>
              <p className="text-xs text-muted-foreground">by Mannat Walia</p>
            </div>
          </div>
        </div>

        {/* Center - Project name */}
        <div className="text-center">
          <h2 className="text-sm font-medium text-muted-foreground">Untitled Project</h2>
          <Badge variant="outline" className="text-xs mt-1">
            <Crown className="w-3 h-3 mr-1" />
            Pro Plan
          </Badge>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Credits */}
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
            <Coins className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{credits} credits</span>
          </div>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/api/placeholder/32/32" alt="User" />
                  <AvatarFallback>MW</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border">
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
