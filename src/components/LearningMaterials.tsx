
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LearningMaterials = () => {
  const courses = [
    {
      title: "Introduction to n8n for Marketers",
      description: "Learn how to automate your marketing workflows with n8n's powerful visual interface",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Beginner", "Marketing"],
      duration: "4 hours"
    },
    {
      title: "Advanced Python Automation",
      description: "Master Python scripting for complex business process automation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tags: ["Advanced", "Development"],
      duration: "8 hours"
    },
    {
      title: "AI Integration Masterclass",
      description: "Integrate AI capabilities into your existing business workflows",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
      tags: ["Intermediate", "AI"],
      duration: "6 hours"
    },
    {
      title: "Zapier to Make Migration",
      description: "Seamlessly transition from Zapier to Make for enhanced automation capabilities",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      tags: ["Intermediate", "Migration"],
      duration: "3 hours"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="text-green-500">Learning Materials</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Expert-crafted courses designed to accelerate your AI and automation journey
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <Card className="bg-[#1a1a1a] border-gray-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden group-hover:shadow-xl group-hover:shadow-green-500/10 h-full">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={course.image} 
                    alt={course.title}
                    whileHover={{ scale: 1.15, rotate: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4"
                  >
                    <Badge variant="secondary" className="bg-green-500 text-white font-semibold">
                      {course.duration}
                    </Badge>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-green-500/10 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-xl">▶</span>
                    </motion.div>
                  </motion.div>
                </div>
                
                <CardHeader className="pb-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-3"
                  >
                    {course.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.15 + 0.5 + tagIndex * 0.1, 
                          duration: 0.4,
                          type: "spring"
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-500 transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    whileHover={{ color: "#10B981" }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardTitle className="text-white transition-colors duration-300">
                      {course.title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-300 mb-4 line-clamp-2">
                    {course.description}
                  </CardDescription>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                    >
                      Start Learning
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningMaterials;
