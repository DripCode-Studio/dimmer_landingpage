import {
  MonitorSmartphone,
  FileMusic,
  Users,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

function Features() {
  const featuresData = [
    {
      title: "Personal Music Data Hub",
      icon: <FileMusic className="w-6 h-6 text-white" />,
      description:
        "Dive deep into your listening habits with built-in statistics, graphs, and charts, mirroring the depth of platforms like Last.fm, but living right within Dimmer. No need for external websites or subscriptions - It's all free.",
    },
    {
      title: "Truly Multi-Platform",
      icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
      description:
        "Enjoy your music and your data seamlessly across your Windows PC, Android phones and tablets, and even your smartwatches. Dimmer is designed to be where you are.",
    },
    {
      title: "Building a Social Experience",
      icon: <Users className="w-6 h-6 text-white" />,
      description:
        "I hope to cook up something special on the social front. Stay tuned for exciting updates that will let you connect with music lovers in new ways. 🫂",
    },
    {
      title: "Your Data, Your Control",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      description:
        "I believe in minimal data collection. Dimmer focuses on providing you with tools and insights, and as such, you use Dimmer 100% Offline. Classic backup and restore features ensure your data is always safe.",
    },
    {
      title: "Seamless Sync and More",
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      description:
        "Future-proof your listening with upcoming support for synced lyrics, metadata, cover art, and other tag information.",
    },
  ];
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="scroll-m-20 text-center text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
        What Makes Dimmer Different?
      </h1>
      <small className="block mx-auto text-sm leading-none font-medium text-muted-foreground text-center max-w-3xl mt-2">
        Dimmer is a hybrid music player designed for those who cherish their
        local music libraries but crave the data and insights often associated
        with online platforms.
      </small>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div
            className="bg-card text-card-foreground p-6 rounded-lg shadow-md border"
            key={index}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="bg-main-accent p-2 rounded-full">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-balance">
                {feature.title}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
