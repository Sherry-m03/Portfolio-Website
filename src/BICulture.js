import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function BICulture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [blogs, setBlogs] = useState([
    {
      id: 3243312,
      name: "The Sweet and Savory World of Thai Cuisine",
      content:
        "Thai cuisine is a delicate balance of sweet, sour, salty, and spicy flavors, and it has become globally adored for its vibrant taste profile and diverse ingredients. The cuisine utilizes fresh herbs such as lemongrass, cilantro, and basil, along with aromatic spices like garlic, chili peppers, and ginger, creating dishes that are both complex and satisfying. Some of the most well-known dishes include Pad Thai, a stir-fried noodle dish with peanuts, lime, and fish sauce, Tom Yum soup, a sour and spicy broth typically made with shrimp, and Green Curry, which uses coconut milk to mellow the heat of chilies and bring a creamy texture. The balance of these different flavor profiles is a key feature of Thai food, with every dish being crafted to highlight the harmony of salty, sweet, sour, and spicy elements. Street food plays a central role in the country's culinary culture, where quick bites like Som Tam (green papaya salad) and satay skewers are staples. Street vendors offer their signature dishes with sizzling woks and aromatic aromas, enticing locals and tourists alike. The variety of dishes is impressive, ranging from hearty main meals to light snacks, and the widespread popularity of Thai cuisine across the world speaks to its versatility. Whether dining in a bustling market in Bangkok or a quiet Thai restaurant in a faraway city, the experience of Thai food is one that celebrates the power of balancing bold ingredients with subtle flavor combinations. The art of Thai cooking goes beyond just the taste of the food itself—it’s about bringing together a sense of freshness, heat, and vibrant colors that make every dish an exciting experience. In addition, the use of fish sauce, tamarind, and palm sugar gives Thai cuisine a signature depth of umami and sweetness that is unparalleled. Furthermore, the culture of eating in Thailand encourages the sharing of meals, creating a sense of community and connection. Whether it is a family gathering or a social event, food plays a central role in Thai culture, bringing people together to enjoy a communal feast that satisfies both the palate and the soul. Beyond the traditional dishes, Thai cuisine has evolved to embrace modern influences and cater to diverse tastes. Fusion Thai dishes, such as Thai-style pizza or Thai-inspired burgers, combine the traditional flavors with Western staples, offering something for both Thai food enthusiasts and newcomers. The vibrant street food scene continues to thrive, with vendors offering fresh and unique twists on classics. Thai cuisine is also recognized for its health benefits, as many dishes are centered around fresh vegetables, lean proteins like seafood and chicken, and the use of natural ingredients that are light yet nourishing. The popularity of Thai food worldwide can be attributed to its bold flavors, its commitment to fresh, high-quality ingredients, and its ability to adapt and innovate while staying true to its roots.",
      image: [
        "https://cdn.pixabay.com/photo/2021/02/09/03/54/thai-food-5997305_640.jpg",
      ],
    },
    {
      id: 5463442,
      name: "The Comfort of Southern U.S. Cuisine",
      content:
        "Southern cuisine, often referred to as 'soul food,' is a rich tradition of hearty, flavorful dishes. Staples like fried chicken, cornbread, and collard greens form the base of many Southern meals. The influence of African, Native American, and European culinary traditions can be seen in dishes such as jambalaya, gumbo, and shrimp and grits. Southern cuisine also shines with its desserts, like pecan pie, banana pudding, and sweet potato casserole, reflecting the region's love of bold, comforting flavors. Southern food is deeply rooted in the history and culture of the American South, where meals are often designed to bring families together and celebrate community. The fried chicken, for instance, is crispy on the outside, tender and juicy on the inside, and seasoned to perfection with a variety of spices, creating a dish that is both flavorful and comforting. Cornbread, a popular side dish, has a slightly sweet and crumbly texture, and it pairs perfectly with dishes like fried chicken and collard greens. The collard greens are simmered slowly with smoked meats, which infuses them with rich, smoky flavors. Jambalaya, a one-pot dish that originated in Louisiana, combines rice with a variety of meats, including sausage, chicken, and shrimp, all seasoned with Cajun spices to create a savory, spicy dish. Gumbo, another Southern favorite, is a thick, hearty stew made with a base of roux, and it features a combination of meat or seafood, vegetables, and herbs. The dish is often served over rice and is a staple in both homes and restaurants in the South. Shrimp and grits, a dish with origins in the Lowcountry region, combines fresh shrimp with creamy, buttery grits and is often enhanced with the addition of bacon, garlic, and spices. For dessert, Southern cuisine offers a selection of indulgent options. Pecan pie, a rich, sweet dessert made with toasted pecans, brown sugar, and syrup, is a classic. Banana pudding, made with layers of vanilla pudding, cookies, and whipped cream, is another Southern favorite, offering a cool, sweet contrast to the heat of the main meal. Sweet potato casserole, often served during the holidays, combines mashed sweet potatoes with butter, sugar, and spices and is topped with a crunchy pecan or marshmallow topping. Southern cuisine is known for its emphasis on family and hospitality, with meals being enjoyed in large gatherings. The tradition of 'passing the plate' at the dinner table, where family members and friends serve one another, reflects the warmth and generosity of Southern dining. It’s not just about food, but about creating an experience where people come together to share and enjoy the flavors of the region, and in doing so, strengthen their bonds.",
      image: [
        "https://cdn.pixabay.com/photo/2020/08/26/17/51/food-5520185_640.jpg",
        "https://cdn.pixabay.com/photo/2017/01/15/14/26/barbeque-1981640_640.jpg",
      ],
    },
    {
      id: 7644656,
      name: "Discovering the Secrets of Mediterranean Cuisine",
      content:
        "Mediterranean cuisine is celebrated for its emphasis on fresh vegetables, olive oil, seafood, and whole grains. Greek dishes like Moussaka and tzatziki, as well as the wide variety of Spanish tapas, highlight the region’s emphasis on light, healthy eating with vibrant flavors. The use of herbs such as oregano, rosemary, and thyme adds a refreshing taste to Mediterranean dishes, while seafood like grilled sardines and octopus provides a taste of the sea. The Mediterranean diet, with its focus on plant-based foods, healthy fats, and lean proteins, has long been associated with numerous health benefits, including improved heart health, weight management, and longevity. One of the most iconic Mediterranean dishes is Greek Moussaka, a layered casserole made with eggplant, minced meat, béchamel sauce, and seasoned with aromatic herbs like cinnamon and oregano. Tzatziki, a refreshing yogurt and cucumber dip, is another staple of Greek cuisine, often served as an appetizer or side dish. In Spain, tapas culture encourages sharing small plates of food, ranging from simple olives and cheeses to more complex dishes like patatas bravas (fried potatoes with spicy tomato sauce) and gambas al ajillo (garlic shrimp). The Mediterranean region is also known for its exceptional seafood, and the simple yet flavorful preparation of grilled fish, such as sardines or sea bream, is a beloved method of cooking. Other seafood dishes, like seafood paella from Spain or grilled octopus from Greece, showcase the bounty of the Mediterranean Sea. Olive oil is a cornerstone of Mediterranean cooking, used not only in cooking but also as a finishing touch for many dishes, drizzled over salads, vegetables, and meats. Whole grains like quinoa, farro, and couscous are often incorporated into meals, adding texture and nutrition. The Mediterranean diet emphasizes moderation, where even rich foods like cheese and wine are enjoyed in smaller portions, promoting balance rather than excess. Fruits like figs, pomegranates, and citrus are frequently used in both savory and sweet dishes, providing a burst of freshness and sweetness. Vegetables such as tomatoes, cucumbers, and eggplants are central to Mediterranean cooking, often incorporated into stews, salads, and pasta dishes. Mediterranean cuisine encourages not only healthy eating but also a way of life, where meals are meant to be enjoyed leisurely, shared with loved ones, and savored in the moment. This cuisine fosters a sense of community, with meals often lasting for hours, accompanied by conversation, laughter, and good wine. In addition to its health benefits, Mediterranean cuisine is also incredibly flavorful and diverse, offering an endless variety of dishes that cater to a wide range of tastes and preferences. Whether enjoying a simple Greek salad, a rich Moroccan tagine, or a flavorful Italian pasta dish, Mediterranean food is a celebration of vibrant ingredients and culinary traditions.",
      image: [
        "https://cdn.pixabay.com/photo/2024/08/20/17/45/ai-generated-8983947_640.jpg",
        "https://cdn.pixabay.com/photo/2020/05/11/15/06/food-5158702_1280.jpg",
      ],
    },
    {
      id: 1524436,
      name: "The Delicious World of Middle Eastern Cuisine",
      content:
        "Middle Eastern cuisine is as diverse as its culture, with flavors ranging from rich and aromatic to light and refreshing. Common ingredients include lamb, rice, chickpeas, olives, and yogurt, used in dishes like hummus, falafel, and shawarma. The combination of spices such as cumin, cinnamon, and coriander, paired with the use of fresh herbs, creates a unique and bold flavor profile. Dishes like kebabs, tabbouleh, and baklava offer a fusion of sweet, savory, and spiced tastes that are both comforting and exotic. Hummus, a creamy dip made from chickpeas, tahini, and olive oil, is often served as a starter or appetizer, alongside freshly baked pita bread. Falafel, another popular dish, consists of deep-fried patties made from ground chickpeas or fava beans, and is often served in pita pockets with vegetables and a drizzle of tahini. Shawarma, a Middle Eastern street food favorite, is made with marinated meat (usually lamb, chicken, or beef) that is slow-cooked on a vertical rotisserie, then sliced thin and served in a wrap with pickled vegetables, garlic sauce, and sometimes French fries. Kebabs, skewers of marinated meat and vegetables grilled to perfection, are another iconic dish, with variations found throughout the region. The Middle East is also home to a rich variety of rice dishes, such as pilaf, which is often flavored with saffron, and dishes like moussaka, a layered casserole made with eggplant and ground meat. Desserts in Middle Eastern cuisine often feature ingredients like honey, nuts, and rosewater. Baklava, a flaky pastry filled with chopped nuts and sweetened with syrup, is one of the most famous desserts in the region. Other desserts, such as kunafa (a sweet cheese pastry) and basbousa (a semolina cake soaked in syrup), offer a deliciously sweet finish to a meal. The use of yogurt is also prominent in Middle Eastern cuisine, either as a side dish or in dishes like tzatziki, a yogurt-based cucumber dip that provides a cool contrast to the heat of spiced foods. One of the most important aspects of Middle Eastern cuisine is its ability to bring people together. Meals are often served family-style, with a variety of dishes placed in the center for everyone to share. This communal approach to eating fosters a sense of unity and connection, making the dining experience not just about food, but about celebration and togetherness. Whether enjoyed at a bustling market in Istanbul, a cozy restaurant in Beirut, or in a home gathering in Cairo, Middle Eastern cuisine offers a rich tapestry of flavors that reflect the region's diverse history and culture. The combination of fresh, seasonal ingredients, the careful balance of spices, and the emphasis on sharing meals makes Middle Eastern food not only delicious but also a celebration of life and community.",
      image: [
        "https://cdn.pixabay.com/photo/2020/03/21/18/04/kabab-4954818_640.jpg",
        "https://cdn.pixabay.com/photo/2022/08/01/13/19/salad-7358142_640.jpg",
      ],
    },
    {
      id: 8746348,
      name: "Savoring the Simplicity of Italian Cuisine",
      content:
        "Italian cuisine is beloved around the world for its simplicity, fresh ingredients, and bold flavors. With its emphasis on high-quality produce, olive oil, fresh herbs, and cheese, Italian cooking is a celebration of the ingredients themselves. Dishes like pizza, pasta, risotto, and caprese salad showcase the beauty of Italian cuisine, where the flavors of each component shine through. Italian food is all about simplicity, and this can be seen in classic dishes like Margherita pizza, a thin crust topped with fresh tomatoes, mozzarella, and basil, which lets each ingredient speak for itself. Pasta dishes like spaghetti aglio e olio (spaghetti with garlic and olive oil) or pasta carbonara (pasta with eggs, pancetta, and cheese) highlight the Italian philosophy of using just a few ingredients, but using them perfectly. Risotto, a creamy rice dish, is another example of the richness of Italian cooking, with variations including seafood, mushrooms, and saffron. Italian cuisine also celebrates the use of seasonal ingredients, with dishes changing depending on the time of year. In the summer, fresh tomatoes, basil, and mozzarella are used to create the perfect caprese salad, while in the winter, hearty stews, roasted meats, and rich pastas take center stage. Olive oil is a cornerstone of Italian cooking, used not only in cooking but also as a finishing touch for many dishes. It’s drizzled over salads, used for dipping bread, and incorporated into sauces to add flavor and depth. Italian cheese is also an integral part of the cuisine, with varieties like parmesan, mozzarella, ricotta, and pecorino being used in everything from pasta dishes to salads. Italian cuisine is also known for its desserts, including classics like tiramisu, cannoli, and panna cotta. Tiramisu, a layered dessert made with coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder, is a favorite among dessert lovers, while cannoli, crispy pastries filled with sweetened ricotta cheese, are a Sicilian specialty. Panna cotta, a creamy, custard-like dessert, is often served with a fruit compote or caramel sauce. Italian food is more than just the dishes—it’s a way of life. Meals are often long and leisurely, enjoyed with family and friends. The tradition of sitting down together to share a meal is central to Italian culture, and the importance of enjoying food in good company cannot be overstated. Whether it's a simple dinner of pasta and salad or an elaborate multi-course feast, Italian cuisine is about enjoying the flavors of life, one bite at a time.",
      image: ["italian-1.jpg"],
    },
    {
      id: 8676534,
      name: "The Uniqueness of Ethiopian Cuisine: A Taste of Tradition",
      content:
        "Ethiopian cuisine is renowned for its distinct flavors and communal dining style, where the sharing of food is central to the experience. The cornerstone of Ethiopian meals is injera, a large, sourdough flatbread made from teff flour. It serves both as the base of the meal and as an edible utensil for scooping up stews, which is the traditional way of eating. Doro Wat, a spicy chicken stew, is one of Ethiopia's most beloved dishes. The heat comes from berbere, a spice blend made with chili peppers, garlic, ginger, and a variety of other spices. This stew is often served with hard-boiled eggs, which absorb the intense flavors. Shiro, another popular dish, is a hearty chickpea stew flavored with garlic, ginger, and berbere, providing a deep, earthy flavor. In Ethiopian cuisine, the balance of spices and the layering of flavors is key, with niter kibbeh (spiced clarified butter) often used to enrich the stews and give them a distinctive taste. Eating Ethiopian food is an act of togetherness—meals are shared among friends and family, and the communal style of dining fosters a deep sense of connection. A large platter of injera, covered with an assortment of stews and lentils, is placed in the center of the table, and everyone gathers around to enjoy the meal. Whether you are enjoying it in a bustling Ethiopian restaurant or in the comfort of someone's home, the warmth of the food and the hospitality of the people make every meal a special occasion.",
      image: ["ethiopean-1.jpg"],
    },
    {
      name: "The Elegance of Scandinavian Cuisine",
      content:
        "Scandinavian cuisine is a reflection of the rugged landscapes and rich traditions of northern Europe, marked by simplicity and an emphasis on fresh, locally sourced ingredients. One of the defining characteristics of Scandinavian cooking is its focus on seafood, particularly fish such as herring, salmon, and cod. Smørrebrød, an open-faced sandwich made with rye bread, butter, and various toppings, is a staple of Danish cuisine. The toppings can include cured meats, cheeses, pickled vegetables, and of course, gravlax—cured salmon flavored with dill and mustard sauce. Meatballs, or 'kottbullar,' are another iconic Scandinavian dish, often served with lingonberry jam and creamy mashed potatoes. The use of root vegetables such as potatoes, carrots, and turnips is common, reflecting the region's agricultural practices. Scandinavian cooking also emphasizes preservation techniques, such as pickling, curing, and fermenting, which have been essential for surviving the long winters. Modern interpretations, like the New Nordic Cuisine movement, focus on seasonal ingredients and innovative cooking methods, often using foraged ingredients such as wild herbs, mushrooms, and berries. Scandinavian cuisine is hearty and nourishing, making use of fresh fish, wild game, grains, and a variety of vegetables. Its simplicity, combined with an emphasis on quality and technique, has made Scandinavian food a celebrated cuisine worldwide.",
      image: ["scandinavian-1.jpg", "scandinavian-2.jpg"],
    },
    {
      name: "Peruvian Cuisine: A Fusion of Flavors",
      content:
        "Peruvian cuisine is a fusion of diverse influences, blending Indigenous traditions with Spanish, African, and Asian flavors to create a truly unique culinary experience. The use of local ingredients such as quinoa, potatoes, and ají peppers has become central to Peru’s gastronomic identity. Ceviche, Peru's national dish, is made from fresh fish marinated in citrus juices and mixed with onions, cilantro, and spicy chili peppers. The acid from the citrus 'cooks' the fish, creating a refreshing and zesty dish that's perfect for the warm climate of the coast. Lomo saltado is another classic, a stir-fry of beef, onions, tomatoes, and potatoes, combined with soy sauce and vinegar—showcasing the Chinese influence in Peruvian cooking, known as 'Chifa.' Peru's cuisine is also known for its rich stews and soups, like the hearty aji de gallina, made with chicken in a creamy, spicy sauce. Staples such as potatoes and corn form the basis of many dishes, with over 3,000 varieties of potatoes found in the country. The combination of vibrant, spicy flavors with the use of indigenous ingredients creates a culinary tradition that is both diverse and exciting. Peru’s food scene has garnered international acclaim, and the country has become a destination for food lovers seeking to experience the fusion of cultures in every bite.",
      image: ["peru-1.jpg", "peru-2.jpg"],
    },
    {
      name: "The Hearty Delights of Russian Cuisine",
      content:
        "Russian cuisine offers a variety of hearty, filling dishes that are designed to provide warmth and sustenance in the country’s cold climate. Dishes such as borscht, a beet-based soup, are perfect for the long winters, providing both nourishment and comfort. The soup is often served with a dollop of sour cream, which adds richness to the earthy flavors of the beets. Another staple is pelmeni, dumplings filled with meat such as pork or beef and served with sour cream or vinegar. Blini, thin pancakes often filled with savory or sweet ingredients like sour cream, caviar, or jam, are another beloved Russian dish, particularly during festivals like Maslenitsa. Rye bread, sour cream, and dill are essential accompaniments in many Russian meals, enhancing the depth and richness of the flavors. Russian cuisine also includes a variety of pickled vegetables, such as cucumbers and mushrooms, which are a common side dish or snack. Desserts like honey cake (medovik) and syrniki (cheese pancakes) offer a sweet end to the meal. Russian cuisine’s emphasis on hearty, comforting dishes reflects the region’s agricultural roots and the need to prepare food that can last through harsh winters. Meals are often enjoyed with family, and gatherings are marked by plentiful food and drink, creating a strong sense of hospitality and warmth.",
      image: ["russian-1.jpg", "russian-2.jpg"],
    },
    {
      name: "The Vibrancy of Thai Street Food",
      content:
        "Thai street food is a vibrant and integral part of the country's culinary culture, known for its balance of flavors—sweet, sour, spicy, and salty. Street food vendors in Thailand serve up a dazzling array of dishes, each bursting with the fresh flavors of herbs like basil, cilantro, and lemongrass, and spices such as chili, garlic, and ginger. One of the most famous Thai street foods is pad thai, a stir-fried noodle dish made with shrimp or chicken, eggs, peanuts, bean sprouts, and a tangy tamarind sauce. Another staple is som tam, a spicy and refreshing papaya salad made with shredded green papaya, chili peppers, peanuts, and a mixture of fish sauce and lime juice. Thai green curry, a creamy and aromatic dish made with coconut milk, green curry paste, and a variety of vegetables and meats, is also commonly enjoyed at street food stalls. These dishes are typically served with rice, making them a satisfying and flavorful meal. Street food is a social experience in Thailand, with vendors lining the streets and offering a chance to grab a quick bite, eat on the go, or sit down with friends. The Thai culinary philosophy is rooted in the idea of balance—each dish harmonizes contrasting flavors, textures, and colors to create an explosion of taste in every bite. Whether you’re enjoying a spicy curry, a sweet coconut dessert, or a refreshing drink like Thai iced tea, Thai street food is a celebration of bold, fresh flavors.",
      image: [
        "https://cdn.pixabay.com/photo/2021/02/09/03/53/thai-food-5997301_640.jpg",
      ],
    },
    {
      name: "The Allure of Ethiopian Cuisine",
      content:
        "Ethiopian cuisine offers a truly unique dining experience, with its focus on communal eating and the bold flavors of spices. At the heart of Ethiopian cuisine is injera, a spongy, sour flatbread made from teff flour, which serves as both the plate and the utensil for eating. Injera is used to scoop up flavorful stews and dishes, making the meal a tactile, interactive experience. Doro wat, a spicy chicken stew, is one of Ethiopia's most iconic dishes, with a rich, savory flavor thanks to the use of berbere spice mix—a blend of chili peppers, garlic, ginger, and other spices. Shiro, a chickpea-based stew, is another popular dish, offering a deeply spiced, earthy flavor. The addition of niter kibbeh (spiced clarified butter) adds complexity and richness to many Ethiopian dishes, enhancing the depth of the stews and giving them a distinctive taste. Ethiopian meals are typically shared in a communal setting, where diners gather around a large platter of injera and stews. This way of eating reflects the strong sense of community and hospitality that is central to Ethiopian culture. The spiciness of the food is balanced by the sourness of the injera, making each bite a satisfying combination of flavors and textures.",
      image: ["ethiopean-2.jpg"],
    },
    {
      name: "The Comfort of Polish Food",
      content:
        "Polish cuisine is hearty and satisfying, with dishes like pierogi (dumplings), kielbasa (sausages), and bigos (hunter’s stew) taking center stage. Soups like żurek, made from fermented rye, are staples of Polish meals. Root vegetables, mushrooms, and sour cream are commonly used ingredients, reflecting Poland’s agricultural heritage and love for comforting flavors.",
      image: [
        "https://cdn.pixabay.com/photo/2018/05/29/00/49/dumplings-3437689_640.jpg",
        "https://cdn.pixabay.com/photo/2018/08/09/13/34/kwasnica-3594527_640.jpg",
      ],
    },
    {
      name: "The Diversity of South African Cuisine",
      content:
        "South African cuisine is a fusion of Indigenous, Dutch, Indian, and Malay influences. Dishes like bobotie (spiced minced meat), biltong (cured meat), and bunny chow (hollowed-out bread filled with curry) are iconic. Braai, a traditional barbecue, is a social and culinary cornerstone. South African flavors often combine sweet and savory elements, reflecting the country's cultural diversity.",
      image: ["ethiopean-2.jpg"],
    },
    {
      name: "The Soulful Taste of Southern U.S. Cuisine",
      content:
        "Southern U.S. cuisine, often called soul food, is rich in tradition and flavor. Staples like fried chicken, collard greens, and cornbread reflect African, Native American, and European influences. Comforting dishes like gumbo, jambalaya, and biscuits and gravy are deeply rooted in Southern culture. Desserts like pecan pie and peach cobbler add a sweet touch to this flavorful cuisine.",
      image: [
        "https://cdn.pixabay.com/photo/2017/01/15/14/26/barbeque-1981640_640.jpg",
      ],
    },
    {
      name: "The Flavors of Vietnamese Cuisine",
      content:
        "Vietnamese cuisine is known for its fresh and balanced flavors. Pho (noodle soup), banh mi (baguette sandwiches), and spring rolls are beloved staples. Fresh herbs like mint and cilantro, along with fish sauce, lime, and chili, are key components of Vietnamese cooking. The cuisine emphasizes harmony between flavors, making it light yet satisfying.",
      image: [
        "https://cdn.pixabay.com/photo/2023/07/18/19/19/spring-rolls-8135469_640.jpg",
        "https://cdn.pixabay.com/photo/2020/12/14/07/38/food-5830202_640.jpg",
      ],
    },
    {
      name: "The Richness of Moroccan Tagines",
      content:
        "Moroccan cuisine is renowned for its aromatic spices and slow-cooked dishes. Tagines, named after the clay pot they are cooked in, are a highlight, featuring combinations of meat, vegetables, dried fruits, and spices. Couscous, harira soup, and mint tea are other staples of Moroccan meals. The blend of sweet and savory flavors, along with vibrant colors, makes Moroccan cuisine a feast for the senses.",
      image: [
        "https://cdn.pixabay.com/photo/2019/09/26/17/37/lamb-4506612_640.jpg",
      ],
    },
    {
      name: "Exploring the Fusion of Filipino Cuisine",
      content:
        "Filipino cuisine is a melting pot of flavors influenced by Spanish, Chinese, Malay, and American cultures. Iconic dishes like adobo, a savory stew of meat marinated in vinegar and soy sauce, and sinigang, a tamarind-based sour soup, showcase the diversity of this cuisine. Lechon (roast pig)Here's an expanded version of your blog topics combined into a single array, each with content close to 1200 words, as requested. Additionally, I've included the image properties copied from your original data.",
      image: [
        "https://cdn.pixabay.com/photo/2022/09/15/21/17/lumpia-7457323_640.jpg",
      ],
    },
    {
      name: "The Comfort of Polish Food",
      content:
        "Polish cuisine is hearty and comforting, shaped by the country’s agricultural traditions and the long, cold winters that demand rich, satisfying dishes. Pierogi, dumplings filled with a variety of ingredients such as potatoes, cheese, mushrooms, or meats, are a quintessential part of Polish dining. These delicate pockets of dough are often served with sour cream and fried onions, adding depth to the flavor. Kielbasa, or Polish sausage, comes in many varieties, each offering a smoky, savory taste and often paired with mustard or sauerkraut. Bigos, also known as hunter’s stew, is another beloved dish, combining sauerkraut, fresh cabbage, and a variety of meats like pork, beef, and sausage, slow-cooked to develop a deep, rich flavor. Soups also play a significant role in Polish cuisine, with żurek being a popular choice. This sour soup is made from fermented rye flour, giving it a tangy, hearty base that is often enriched with sausage, hard-boiled eggs, and potatoes. Polish food also frequently incorporates root vegetables like potatoes, carrots, and beets, which are staples in the country’s cuisine. Mushrooms, which are abundant in Polish forests, are often used in soups and sauces. Sour cream is another key ingredient, lending richness and tang to many dishes. Polish meals are typically enjoyed in a communal, family-oriented setting, where hearty servings are the norm, and food is a symbol of warmth and togetherness.",
      image: [
        "https://cdn.pixabay.com/photo/2018/08/09/13/34/kwasnica-3594527_640.jpg",
      ],
    },
    {
      name: "The Diversity of South African Cuisine",
      content:
        "South African cuisine is a fusion of Indigenous, Dutch, Indian, and Malay influences. Dishes like bobotie (spiced minced meat), biltong (cured meat), and bunny chow (hollowed-out bread filled with curry) are iconic. Braai, a traditional barbecue, is a social and culinary cornerstone. South African flavors often combine sweet and savory elements, reflecting the country's cultural diversity.",
      image: ["ethiopean-2.jpg"],
    },
    {
      name: "The Soulful Taste of Southern U.S. Cuisine",
      content:
        "Southern U.S. cuisine, often called soul food, is rich in tradition and flavor. Staples like fried chicken, collard greens, and cornbread reflect African, Native American, and European influences. Comforting dishes like gumbo, jambalaya, and biscuits and gravy are deeply rooted in Southern culture. Desserts like pecan pie and peach cobbler add a sweet touch to this flavorful cuisine.",
      image: [
        "https://cdn.pixabay.com/photo/2017/01/15/14/26/barbeque-1981640_640.jpg",
      ],
    },
    {
      name: "The Flavors of Vietnamese Cuisine",
      content:
        "Vietnamese cuisine is known for its fresh and balanced flavors. Pho (noodle soup), banh mi (baguette sandwiches), and spring rolls are beloved staples. Fresh herbs like mint and cilantro, along with fish sauce, lime, and chili, are key components of Vietnamese cooking. The cuisine emphasizes harmony between flavors, making it light yet satisfying.",
      image: [
        "https://cdn.pixabay.com/photo/2023/07/18/19/19/spring-rolls-8135469_640.jpg",
        "https://cdn.pixabay.com/photo/2020/12/14/07/38/food-5830202_640.jpg",
      ],
    },
    {
      name: "The Richness of Moroccan Tagines",
      content:
        "Moroccan cuisine is renowned for its aromatic spices and slow-cooked dishes. Tagines, named after the clay pot they are cooked in, are a highlight, featuring combinations of meat, vegetables, dried fruits, and spices. Couscous, harira soup, and mint tea are other staples of Moroccan meals. The blend of sweet and savory flavors, along with vibrant colors, makes Moroccan cuisine a feast for the senses.",
      image: [
        "https://cdn.pixabay.com/photo/2019/09/26/17/37/lamb-4506612_640.jpg",
      ],
    },
    {
      name: "Exploring the Fusion of Filipino Cuisine",
      content:
        "Filipino cuisine is a melting pot of flavors influenced by Spanish, Chinese, Malay, and American cultures. Iconic dishes like adobo, a savory stew of meat marinated in vinegar and soy sauce, and sinigang, a tamarind-based sour soup, showcase the diversity of this cuisine. Lechon (roast pig)Here's an expanded version of your blog topics combined into a single array, each with content close to 1200 words, as requested. Additionally, I've included the image properties copied from your original data.",
      image: [
        "https://cdn.pixabay.com/photo/2022/09/15/21/17/lumpia-7457323_640.jpg",
      ],
    },
    {
      name: "The Comfort of Polish Food",
      content:
        "Polish cuisine is hearty and comforting, shaped by the country’s agricultural traditions and the long, cold winters that demand rich, satisfying dishes. Pierogi, dumplings filled with a variety of ingredients such as potatoes, cheese, mushrooms, or meats, are a quintessential part of Polish dining. These delicate pockets of dough are often served with sour cream and fried onions, adding depth to the flavor. Kielbasa, or Polish sausage, comes in many varieties, each offering a smoky, savory taste and often paired with mustard or sauerkraut. Bigos, also known as hunter’s stew, is another beloved dish, combining sauerkraut, fresh cabbage, and a variety of meats like pork, beef, and sausage, slow-cooked to develop a deep, rich flavor. Soups also play a significant role in Polish cuisine, with żurek being a popular choice. This sour soup is made from fermented rye flour, giving it a tangy, hearty base that is often enriched with sausage, hard-boiled eggs, and potatoes. Polish food also frequently incorporates root vegetables like potatoes, carrots, and beets, which are staples in the country’s cuisine. Mushrooms, which are abundant in Polish forests, are often used in soups and sauces. Sour cream is another key ingredient, lending richness and tang to many dishes. Polish meals are typically enjoyed in a communal, family-oriented setting, where hearty servings are the norm, and food is a symbol of warmth and togetherness.",
      image: [
        "https://cdn.pixabay.com/photo/2018/08/09/13/34/kwasnica-3594527_640.jpg",
      ],
    },
  ]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomeWrapper blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route
          path="new-blog"
          element={<NewBlogWrapper blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route path="bic/:id" element={<ViewDetailsWrapper blogs={blogs} />} />
      </Routes>
    </div>
  );
}

function Home({ blogs, setBlogs }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const HomeBlogs = [
    {
      id: 1328866,
      name: "Spice It Up: A Journey Through Indian Cuisine",
      content:
        "Indian cuisine is a treasure trove of spices, flavors, and textures, varying from region to region. The use of spices like cumin, coriander, turmeric, and garam masala creates dishes that are aromatic and bold. From the creamy and rich curries of North India, such as Butter Chicken and Rogan Josh, to the spicy, tangy dishes of the South like Dosa and Sambar, Indian cuisine offers something for everyone. The balance of flavors—from sweet to sour, salty to spicy—is what makes Indian food so exciting and vibrant.",
      image: "indian-cuisine.jpg",
    },
    {
      id: 1254663,
      name: "Exploring the Rich Flavors of Italian Cuisine",
      content:
        "Italian cuisine is renowned worldwide for its simple yet flavorful dishes. From pasta to pizza, each region offers unique ingredients and techniques that make Italian food a global favorite. The combination of fresh tomatoes, aromatic basil, and rich olive oil makes the heart of Italian food, with classics like Spaghetti Bolognese and Margherita pizza offering a true taste of Italy. Regional specialties such as risotto from the north and seafood dishes from the Amalfi Coast further showcase the country’s culinary diversity.",
      image: "italian-1.jpg",
    },
    {
      id: 4386622,
      name: "Savoring the Elegance of French Cuisine",
      content:
        "French cuisine, known for its refinement and sophistication, is the epitome of culinary art. From delicate pastries like croissants and éclairs to rich sauces like béchamel and hollandaise, every dish tells a story of tradition and skill. Iconic dishes like coq au vin, bouillabaisse, and ratatouille highlight regional specialties, while the emphasis on fresh, high-quality ingredients ensures exceptional flavor. The pairing of food and wine is an integral part of the French dining experience, creating a harmonious balance in every meal.",
      image: "french-cuisine.jpg",
    },
    {
      id: 2437745,
      name: "Discovering the Vibrancy of Mexican Cuisine",
      content:
        "Mexican cuisine is a fiesta of colors, flavors, and textures. Staples like tacos, burritos, and enchiladas are filled with spiced meats, beans, and fresh vegetables, topped with zesty salsas and creamy guacamole. Traditional dishes such as mole poblano, tamales, and pozole showcase the depth of Mexican culinary heritage. Ingredients like chili peppers, corn, and cacao play a central role, making the cuisine both robust and versatile. Mexican food is a celebration of culture, best enjoyed in the company of family and friends.",
      image: "mexican-cuisine.jpg",
    },
    {
      id: 7768233,
      name: "The Art of Sushi Making: A Glimpse into Japanese Cuisine",
      content:
        "Japanese cuisine offers a delicate balance of flavors and aesthetics, with sushi being one of its most iconic dishes. The process of making sushi involves selecting the freshest fish, perfecting the rice, and wrapping it all together with precision. Nigiri, sashimi, and rolls like California and Tempura Rolls cater to various palates, while sushi etiquette, including soy sauce and wasabi pairings, remains an essential part of the experience. The focus on seasonality and presentation has led Japanese cuisine to become a staple of fine dining worldwide.",
      image: "japanese-cuisine.jpg",
    },
  ];
  return (
    <div>
      <div className="bic">
        <div className="bic-navbar">
          <h1 id="bic-heading">Bite into Culture</h1>
          <Link to="new-blog">
            <button id="view-all-btn">
              <h3 style={{ color: "white", fontSize: "18px" }}>New Blog</h3>
            </button>
          </Link>
        </div>
        <div className="bic-display">
          {HomeBlogs.map((blog, index) => {
            return (
              <div id={`bic-bl${index}`} key={blog.id}>
                <img
                  style={
                    index === 0
                      ? {
                          height: "678px",
                          width: "487px",
                          borderBottomLeftRadius: "30px",
                          borderTopLeftRadius: "30px",
                        }
                      : {
                          height: "339px",
                          width: "467px",
                          borderTopLeftRadius: "30px",
                          borderTopRightRadius: "30px",
                        }
                  }
                  src={blog.image}
                  alt=""
                ></img>
                <div
                  style={{
                    padding: "30px",
                  }}
                >
                  <h3
                    style={
                      index === 0
                        ? {
                            marginTop: "50px",
                            marginBottom: "40px",
                            fontSize: "35px",
                            fontFamily: "Lusitana",
                          }
                        : {
                            marginBottom: "20px",
                            fontSize: "30px",
                            fontFamily: "Lusitana",
                          }
                    }
                  >
                    {blog.name}
                  </h3>
                  <p
                    style={
                      index === 0
                        ? {
                            textAlign: "justify",
                            fontSize: "16px",
                            fontFamily: "noto sans",
                            fontWeight: "300",
                          }
                        : {
                            textAlign: "justify",
                            fontSize: "14px",
                            fontFamily: "noto sans",
                            fontWeight: "300",
                          }
                    }
                  >
                    {blog.content}
                  </p>{" "}
                </div>
              </div>
            );
          })}
        </div>
        <ViewAll blogs={blogs} setBlogs={setBlogs} />
      </div>
    </div>
  );
}
function HomeWrapper({ blogs, setBlogs }) {
  return <Home blogs={blogs} setBlogs={setBlogs} />;
}

function ViewAll({ blogs, setBlogs }) {
  const navigate = useNavigate();
  const handleNavigation = (index) => {
    navigate(`bic/${blogs[index].id}`);
  };
  return (
    <div className="bic-ViewAll">
      <div>
        <h1 style={{ textAlign: "center" }}>More Blogs</h1>
      </div>
      <div className="bic-view">
        {blogs.map((blog, index) => {
          const styleClass = `bic${index % 11}`;
          return (
            <div
              onClick={() => handleNavigation(index)}
              className={`bic-view-block ${styleClass}`}
              key={blog.id}
            >
              {console.log(blog.image)}
              <img
                src={
                  blog.image && blog.image[0] // Check if `image` and `image[0]` exist
                    ? blog.image[0].startsWith("http")
                      ? blog.image[0]
                      : `/${blog.image[0]}`
                    : "thai-food-1.jpg" // Fallback in case `image[0]` is undefined
                }
                alt=""
              ></img>
              <div
                className="bic-view-head"
                style={
                  index === 0 ||
                  index === 3 ||
                  index === 8 ||
                  index === 9 ||
                  index === 10
                    ? { position: "absolute", top: "91%" }
                    : { position: "absolute", top: "80%" }
                }
              >
                <h3
                  style={{ color: "white", fontSize: "24px", padding: "10px" }}
                >
                  {blog.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ViewDetailsWrapper({ blogs }) {
  return <ViewDetails blogs={blogs} />;
}

function ViewDetails({ blogs }) {
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  return (
    <div className="bic-blogs-details">
      {blogs.map((b) => {
        if (b.id === numericId) {
          return (
            <div key={b.id}>
              {console.log("Blogs:", b.image[0])}
              <img
                style={{ width: "100vw", height: "500px", objectFit: "cover" }}
                src={
                  b.image && b.image[0] // Check if `image` and `image[0]` exist
                    ? b.image[0].startsWith("http")
                      ? b.image[0]
                      : `/${b.image[0]}`
                    : "thai-food-1.jpg" // Fallback in case `image[0]` is undefined
                }
                alt=""
              />
              <h1 id="bic-blog-title">{b.name}</h1>
              <p id="bic-blog-desc">{b.content}</p>
            </div>
          );
        }
        return null; // Cleanly handle unmatched cases
      })}
    </div>
  );
}

function NewBlogWrapper({ blogs, setBlogs }) {
  return <NewBlog blogs={blogs} setBlogs={setBlogs} />;
}

function NewBlog({ blogs, setBlogs }) {
  const [BlogName, setBlogName] = useState("");
  const [BlogDesc, setBlogDesc] = useState("");
  const [BlogImg, setBlogImg] = useState("");

  const handleNewClick = useCallback(
    (e) => {
      if (e) e.preventDefault();
      if (BlogName.trim() === "") return;
      if (BlogDesc.trim() === "") return;
      const id = crypto.randomUUID();

      setBlogs((prevData) => [
        ...prevData,
        {
          id: id,
          name: BlogName,
          content: BlogDesc,
          image: BlogImg ? [BlogImg] : [],
        },
      ]);
      setBlogName("");
      setBlogDesc("");
      setBlogImg("");
    },
    [BlogName, BlogDesc, BlogImg, setBlogs]
  );

  return (
    <div className="bic-new-blog">
      <div className="bic-new-div">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "30px",
            fontSize: "25px",
          }}
        >
          New Blog Post
        </h1>
        <form>
          <div id="bic-new-input-div">
            <label id="new-input-label" for="title">
              Title:
            </label>
            <input
              id="new-input"
              type="text"
              name="title"
              placeholder="Enter Blog "
              autoComplete="off"
              autoFocus={true}
              // ref={inputNewEl}
              onChange={(e) => setBlogName(e.target.value)}
            />
            <label id="new-input-label" for="content">
              Content:
            </label>
            <textarea
              id="new-input"
              name="content"
              placeholder="Enter Blog Content"
              autoComplete="off"
              autoFocus={true}
              // ref={inputNewEl}
              onChange={(e) => setBlogDesc(e.target.value)}
            ></textarea>
            <label id="new-input-label" for="image">
              Image URL:
            </label>
            <input
              id="new-input"
              type="text"
              name="title"
              placeholder="Enter Image URL "
              autoComplete="off"
              autoFocus={true}
              // ref={inputNewEl}
              onChange={(e) => setBlogImg(e.target.value)}
            />{" "}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              id="bic-new-btn"
              className="edit"
              type="submit"
              onClick={(e) => handleNewClick(e)}
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
