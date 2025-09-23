
"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, X, Send, Loader2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { getChatbotResponse } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Message = {
  role: "user" | "model";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hello! How can I assist you with AyuLink today?" },
  ]);
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    startTransition(async () => {
      const history = messages.slice();
      const result = await getChatbotResponse(history, userMessage.content);
      if ("error" in result) {
        toast({
          variant: "destructive",
          title: "Chatbot Error",
          description: result.error.includes('API key not valid') ? 'Your Gemini API key is not configured. Please add it to the .env file.' : result.error,
        });
        setMessages((prev) => [...prev, { role: "model", content: "Sorry, I encountered an error. Please check your API key or try again." }]);
      } else {
        setMessages((prev) => [...prev, { role: "model", content: result.response }]);
      }
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages, isPending]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="rounded-full w-24 h-12 shadow-lg animate-pulse-glow flex items-center justify-center"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
          <span className="sr-only">Toggle Chatbot</span>
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-card border rounded-lg shadow-xl animate-fade-in">
          <div className="flex flex-col h-[60vh]">
            <header className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="h-6 w-6 text-primary" />
                 </div>
                 <h3 className="text-lg font-semibold">AyuLink Assistant</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </header>
            
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.role === "model" && (
                       <Avatar className="w-8 h-8 border-2 border-primary">
                        <div className="bg-primary text-primary-foreground flex items-center justify-center w-full h-full">
                           <Bot className="h-5 w-5" />
                        </div>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3 text-sm shadow-sm",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      {message.content}
                    </div>
                     {message.role === "user" && (
                       <Avatar className="w-8 h-8 border-2">
                         <div className="bg-muted text-muted-foreground flex items-center justify-center w-full h-full">
                            <User className="h-5 w-5" />
                         </div>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isPending && (
                  <div className="flex items-start gap-3 justify-start">
                     <Avatar className="w-8 h-8 border-2 border-primary">
                        <div className="bg-primary text-primary-foreground flex items-center justify-center w-full h-full">
                           <Bot className="h-5 w-5" />
                        </div>
                      </Avatar>
                    <div className="bg-muted rounded-lg p-3 shadow-sm">
                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <footer className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask anything..."
                  autoComplete="off"
                  disabled={isPending}
                />
                <Button type="submit" size="icon" disabled={isPending || !input.trim()}>
                  {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
