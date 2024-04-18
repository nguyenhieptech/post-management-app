import { imgRegistry } from "@/assets/img";
import { Container } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <Container className="w-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Avatar>
                <AvatarImage src={imgRegistry.avatar1} />
                <AvatarFallback>HN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex justify-end md:justify-center">
              <MobileNavigation />
              <DesktopNavigation />
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <ModeToggle />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
