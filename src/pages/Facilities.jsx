import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Container } from "react-bootstrap";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
const Facilities = () => {
  const { id } = useParams();
  const htmlCkeditor = `<p><strong>The First Canteen</strong></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/06bf6360-044e-4b34-adf6-5c1276407e77.jpg" style="width:100%" /></p>

<p>&nbsp;</p>

<p>The First Canteen is located opposite the Teaching Building A, consisting of the First Dining Hall, the Second Dining Hall and the Third Dining Hall.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/79a8982a-753a-4554-b617-6109b1f9be64.jpg" style="width:100%" /></p>

<p>The&nbsp;First Dining Hall&nbsp;in the&nbsp;First Canteen</p>

<p>Breakfast time 6:30-8:30</p>

<p>Lunch time 11:00-12:30</p>

<p>Dinner time 16:30-19:00</p>

<p>&nbsp;</p>

<p>The Dining Hall is located on the first floor of the first canteen. It provides more than 40 kinds of dishes every day, including pot stickers, dumplings, crispy duck, deep-fried spare ribs with spicy salt, etc. The renewal rate of dishes is 25%. Operating time of the midnight snack service window in the Dining Hall to 22:30, and 20% discount is offered between 18:00-22:30.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/adc0a572-8af6-40f4-93b7-c52cf71deeef.jpg" style="width:100%"/></p>

<p>Internal sight</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/85dc38bf-9283-4ed0-a8bf-c06747a4080c.jpg" style="width:100%"/></p>

<p>External sight of the first canteen</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/0337960a-d159-4b5a-8e25-66174fdfc7df.jpg" style="width:100%"/></p>

<p>Midnight snack service</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/a6a74c34-4b16-4d65-8f13-42c8cd301df2.jpg" style="width:100%" /></p>

<p>The&nbsp;secondDining&nbsp;Hall&nbsp;in&nbsp;the first canteen</p>

<p>Lunch time 11:00-12:30</p>

<p>Dinner time 16:30-18:00</p>

<p>&nbsp;</p>

<p>The second Dining Hall is the Dining Hall for faculty and staff, located on the second floor of the first canteen. It provides a special buffet costs RMB 25 per person. There are about 18 courses of various dishes, including 5 kinds of roughage and&nbsp;noodles. Soup, fruit, drinks, etc. are provided daily, and the renewal rate of dishes is 30%. During holidays, the second Dining Hall makes corresponding adjustments to provide fast food, etc.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/408780cb-b2b6-4bd6-8049-172427a937f6.jpg" style="width:100%" /></p>

<p>The outdoor dining area in front of the second and third Dining Halls</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/85e6b786-e8ca-4e90-a285-ac87a82a08a5.jpg" style="width:100%" /></p>

<p>The buffet dining area of the second Dining Hall</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/cb1772fa-8d2f-4fae-bc3e-fbff708fd605.jpg" style="width:100%"/></p>

<p>The third Dining Hall in the first canteen</p>

<p>Breakfast time 6:30-8:30</p>

<p>Lunch time 11:00-13:00</p>

<p>Dinner time 16:30-18:30</p>

<p>&nbsp;</p>

<p>The third Dining Hall is located on the second floor of the first canteen. In order to serves the students with special eating habits from all regions of China, the third Dining Hall provides beef soup, noodles, clay pot, teppanyaki, stir-fried, spicy hot pot, fast food, rice topped with dishes, hot-spicy pot and other special snacks.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/8f36915b-dcf7-42a8-850b-3797a5839376.jpg" style="width:100%"/></p>

<p>The third Dining Hall</p>

<p>&nbsp;</p>

<p><strong>The Second Canteen</strong></p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/04527dae-1987-4217-b0bd-32801948739a.jpg" style="width:100%"/></p>

<p>&nbsp;</p>

<p>In order to serve personalized dining needs of different students, the second canteen consists of the fourth Dining Hall, the fifth Dining Hall, Cheng Yuan Dining Hall, Western Dining Hall, ethnic Dining Hall and Student Pilot Dining Hall.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/1754376d-eea4-4b3d-b0a5-e522ed9867f0.jpg" style="width:100%"/></p>

<p>The fourth Dining Hall in the second canteen</p>

<p>Breakfast time 6:30-8:30</p>

<p>Lunch time 11:00-12:30</p>

<p>Dinner time 16:30-19:00</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/1b211884-3dd7-47c6-81ea-cf5945afe466.jpg" style="width:100%"/></p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/5dca626b-9fc2-42fc-ba77-d75ceced0a55.jpg" style="width:100%"/></p>

<p>&nbsp;</p>

<p>The fourth Dining Hall on the first floor of the second canteen has about 700 seats and 12 service windows. Among them, there are 4 midnight snack service windows, operating time to 22:30.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/3b3ca90c-d7e6-4e51-a51f-9d42271a135c.jpg" style="width:100%" /></p>

<p>The fifth&nbsp;Dining Hall in the second canteen</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/88807b3f-e176-4db5-9d73-8d7bd8dd1b5d.jpg" style="width:100%"/></p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/9739e616-a88d-466c-92c4-0c85a0da303b.jpg" style="width:100%"/></p>

<p>&nbsp;</p>

<p>The fifth Dining Hall is located on the second floor of the second canteen, with about 960 seats. It provides flavor snacks and serves the personalized dining needs of students.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/5e57f5c7-01b2-4e1f-a630-85b085ba154c.jpg" style="width:100%"/></p>

<p>Western Dining Hall in the second canteen</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/9309330c-ba70-4ea5-b529-b5d1b4f92ca6.jpg" style="width:100%"/></p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/0a23ba87-f4ef-4f71-aa7f-17050d5c2f5c.jpg" style="width:100%"/></p>

<p>&nbsp;</p>

<p>The Western Dining Hall is located on the third floor of the second canteen, supplies&nbsp;pasta, steak, pizza and other Western food, provides a better dining environment and service for the teachers and students.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/c023d9b7-2d4b-42f6-b5d0-4bb39bc2d339.jpg" style="width:100%"/></p>

<p>Cheng Yuan Dining Hall in the second canteen</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/7f36b234-40cc-42d0-8d88-681fab7f91ca.jpg" style="width:100%"/></p>

<p>&nbsp;</p>

<p>Cheng Yuan Dining Hall is located on the third floor of the second canteen, provides mid-range catering services, including taking orders, dinner party, business dinner, business reception, etc., serves the needs of teachers and students.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/4747acb8-c217-4928-8d2e-3a5d261c9011.jpg" style="width:100%"/></p>

<p>Student Pilot Dining Hall&nbsp;in the second canteen</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/5db87426-ce47-42e5-88be-a15748eebbd9.jpg" style="width:100%" /></p>

<p>&nbsp;</p>

<p>The Dining Hall is located on the third floor of the second canteen. Considering the special diet of pilots, it mainly provides breakfast, lunch and dinner in the form of optional meals.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/eed66848-78c6-4b1e-83f9-1d4d8585bb16.jpg" /></p>

<p>Ethnic Dining Hall in the second canteen</p>

<p>&nbsp;</p>

<p>The ethnic Dining Hall is located on the third floor of the second canteen, provides halal dishes with the northwest flavor.</p>

<p>&nbsp;</p>

<p><strong>The fifth Dining Hall</strong><strong>（</strong><strong>library</strong><strong>）</strong></p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/f8c7cee8-334c-47b0-a176-1e165d55971b.jpg" /></p>

<p>Monday to Friday</p>

<p>Lunch time 11:00-12:30</p>

<p>&nbsp;</p>

<p>The fifth Dining Hall is located on the Negative first floor of the information center. It provides lunch for the teachers and students who work and study in the library. After renovation, it provides a better dining environment for teachers and students, strengthens the ability of serving meals and improves the quality of food.</p>

<p>&nbsp;</p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/d1a09771-41e5-42f2-aa93-0456552bdce8.jpg" /></p>

<p><img src="https://en.sues.edu.cn/_upload/article/images/b4/ab/6ea1da6a4d5f891382a851a1aad0/c1ce501d-6316-4338-b98d-c8a448e881dc.jpg" /></p>

<p>&nbsp;</p>

<p>On traditional festivals, such as Dragon Boat Festival, Ching Ming Festival, our canteens provide traditional Chinese food: rice dumplings, qingtuan, etc. During summer vacation, canteens also provide mung bean soup to relieve summer heat, provide what most teachers and students want.</p>
`;
  return (
    <div>
      <div>
        <HeaderTitleComponent name="Tutorial facilities"></HeaderTitleComponent>
      </div>
      <Container className="my-5">{parse(htmlCkeditor)}</Container>
    </div>
  );
};

export default Facilities;
