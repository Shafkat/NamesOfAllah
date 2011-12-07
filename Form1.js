using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Names_of_Allah_v2._0
{
    public partial class Form1 : Form
    {
        #region
        public string[] arabicNames = { "Ar Rahman", "Ar Rahim", "Al Malik", "Al Quddus", "As Salaam", "Al Mu'min", "Al Muhaymin", "Al Aziz", "Al Jabbar", "Al Mutakabbir", "Al Khaliq", "Al Bari'", "Al Musawwir", "Al Ghaffar", "Al Qahhar", "Al Wahhab", "Ar Razzaq", "Al Fattah", "Al 'Alim", "Al Qabid", "Al Basit", "Al Khafid", "Al Rafi'", "Al Mu'izz", "Al Mudhill", "As Samir", "Al Basir", "Al Hakam", "Al 'Adl", "Al Latif", "Al Khabir", "Al Halim", "Al 'Azim", "Al Ghafur", "Ash Shakur", "Al Ali", "Al Kabir", "Al Hafiz", "Al Muqit", "Al Hasib", "Al Jalil", "Al Karim", "Ar Raqib", "Al Mujib", "Al Wasi'", "Al Hakim", "Al Wadud", "Al Majid", "Al Ba'ith", "Ash Shahid", "Al Haqq", "Al Wakil", "Al Qawi", "Al Matin", "Al Wali", "Al Hamid", "Al Muhsi", "Al Mubdi", "Al Mu'id", "Al Muhyi", "Al Mumit", "Al Hayy", "Al Qayyum", "Al Wajid", "Al Majid", "Al Wahid", "Al Ahad", "As Samad", "Al Qadir", "Al Muqtadir", "Al Muqaddin", "Al Mu'akhkhir", "Al Awwal", "Al Akhir", "Az Zahir", "Al Batin", "Al Wali", "Al Muta'ali", "Al Barr", "At Tawwib", "Al Muntaqim", "Al Afu", "Ar Ra'uf", "Malik al Mulk", "Dhul Jalali Wal Ikraam", "Al Muqsit", "Al Jami", "Al Ghani", "Al Mughni", "Al Mani'", "Ad Darr", "An Nafi", "An Nur", "Al Hadi", "Al Badi", "Al Baqi", "Al Warith", "Ar Rashid", "As Sabur" };

        public string[] englishNames = { "The All Compassionate", "The All Merciful", "The Absolute Ruler", "The Pure One","The Source of Peace","The Inspirer of Faith",
"The Guardian","The Victorious","The Compeller","The Greatest","The Creator","The Maker of Order","The Shaper of Beauty",
"The Forgiving","The Subduer","The Giver of All","The Sustainer","The Opener","The Knower of All","The Constrictor","The Reliever",
"The Abaser","The Exalter","The Bestower of Honours","The Humiliator","The Hearer of All","The Seer of All","The Judge","The Just",
"The Subtle One","The All Aware","The Forebearing","The Magnificent","The Forgiver and Hider of Faults","The Rewarder of Thankfulness",
"The Highest","The Greatest","The Preserver","The Nourisher","The Accounter","The Mighty","The Generous",
"The Watchful One","The Responder to Prayer","The All Comprehending","The Perfectly Wise","The Loving One","The Majestic One",
"The Resurrector","The Witness","The Truth","The Trustee","The Possessor of All Strength","The Forceful One","The Governor",
"The Praised One","The Appraiser","The Originator","The Restorer","The Giver of Life","The Taker of Life","The Ever Living One",
"The Self Existing One","The Finder","The Glorious","The Only One","The One","The Satisfier of All Needs","The All Powerful",
"The Creator of All Power","The Expediter","The Delayer","The First","The Last","The Manifest One","The Hidden One",
"The Protecting Friend","The Supreme One","The Doer of Good","The Guide to Repentance","The Avenger","The Forgiver","The Clement",
"The Owner of All","The Lord of Majesty and Bounty","The Equitable One","The Gatherer","The Rich One","The Enricher",
"The Preventer of Harm","The Creator of The Harmful","The Creator of Good","The Light","The Guide","The Originator","The Everlasting One",
"The Inheritor of All","The Righteous Teacher","The Patient One"};

        public string[] questionMode;
        public string[] answerMode;
        public string[] ansList = new string[4];

        #endregion

        Random randomNumber = new Random();
        public int r1, r2, r3, r4, r5, r6, r7, r8, r9;
        public int score = 0;
        public string selectedMode;
        public int numofQuestions = -1;
        public int[] scoreSet = null;
        public int[] numofQuestionsSet;

        public Form1()
        {
            InitializeComponent();
            questionMode = arabicNames;
            answerMode = englishNames;
            Run();
            Run_OtherVars();
            label1.Text = score.ToString();
        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (button1.Text != answerMode[r1])
            {
                score--;
                MessageBox.Show("Incorrect Answer! Correct Answer: " + answerMode[r1]);
            }
            else
            {
                score++;
                MessageBox.Show("Correct Answer! MashaAllah!");
            }
            //scoreSet[numofQuestions] = score;
            AfterButtonPress();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (button2.Text != answerMode[r1])
            {
                score--;
                MessageBox.Show("Incorrect Answer! Correct Answer: " + answerMode[r1]);
            }
            else
            {
                score++;
                MessageBox.Show("Correct Answer! MashaAllah!");
            }
            //scoreSet[numofQuestions] = score;
            AfterButtonPress();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (button3.Text != answerMode[r1])
            {
                score--;
                MessageBox.Show("Incorrect Answer! Correct Answer: " + answerMode[r1]);
            }
            else
            {
                score++;
                MessageBox.Show("Correct Answer! MashaAllah!");
            }
            //scoreSet[numofQuestions] = score;
            AfterButtonPress();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            if (button4.Text != answerMode[r1])
            {
                score--;
                MessageBox.Show("Incorrect Answer! Correct Answer: " + answerMode[r1]);
            }
            else
            {
                score++;
                MessageBox.Show("Correct Answer! MashaAllah!");
            }
            //scoreSet[numofQuestions] = score;
            AfterButtonPress();
        }

        private void Run()
        {
            r1 = randomNumber.Next(0, 98);
            textBox1.Text = questionMode[r1];
            numofQuestions++;
        }

        private void Run_OtherVars()
        {
            //First answer
            do
            {
                r2 = randomNumber.Next(0, 98);
            } while (r2 == r1);

            //Second answer
            do
            {
                r3 = randomNumber.Next(0, 98);
            } while ((r3 == r1) || (r3 == r2));

            //Third answer
            do
            {
                r4 = randomNumber.Next(0, 98);
            } while ((r4 == r1) || (r4 == r2) || (r4 == r3));

            Run_Assign();

        }

        private void Run_Assign()
        {
            r6 = randomNumber.Next(1, 8);

            if ((r6 == 1) || (r6 == 5))
            {
                ansList[0] = answerMode[r1];
                ansList[1] = answerMode[r2];
                ansList[2] = answerMode[r3];
                ansList[3] = answerMode[r4];
            }
            else if ((r6 == 2) || (r6 == 6))
            {
                ansList[0] = answerMode[r2];
                ansList[1] = answerMode[r1];
                ansList[2] = answerMode[r3];
                ansList[3] = answerMode[r4];
            }
            else if ((r6 == 3) || (r6 == 7))
            {
                ansList[0] = answerMode[r2];
                ansList[1] = answerMode[r3];
                ansList[2] = answerMode[r1];
                ansList[3] = answerMode[r4];
            }
            else if ((r6 == 4) || (r6 == 8))
            {
                ansList[0] = answerMode[r2];
                ansList[1] = answerMode[r3];
                ansList[2] = answerMode[r4];
                ansList[3] = answerMode[r1];
            }

            button1.Text = ansList[0];
            button2.Text = ansList[1];
            button3.Text = ansList[2];
            button4.Text = ansList[3];
        }

        private void AnswerCheck()
        {
            if (answerMode[r1] != this.Text)
            {
                score--;
                MessageBox.Show("Incorrect Answer! Correct Answer: " + answerMode[r1]);
            }
            else
            {
                score++;
                MessageBox.Show("Correct Answer! MashaAllah!");
            }
            Run();
            Run_OtherVars();
        }

        private void BadScore()
        {
            if (score < 0)
            {
                label1.ForeColor = Color.Red;
            }
            else if (score == 0)
            {
                label1.ForeColor = Color.Black;
            }
            else
            {
                label1.ForeColor = Color.Green;
            }
        }

        private void AfterButtonPress()
        {
            Run();
            Run_OtherVars();
            label1.Text = score.ToString();
            BadScore();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            score = 0;
            AfterButtonPress();
            numofQuestions = 0;
            scoreSet = null;
        }

        private void ChangeMode(string s)
        {
            if (s == "Arabic to English")
            {
                questionMode = arabicNames;
                answerMode = englishNames;
            }
            else
            {
                questionMode = englishNames;
                answerMode = arabicNames;
            }
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            selectedMode = comboBox1.SelectedItem.ToString();
            ChangeMode(selectedMode);
            score = 0;
            AfterButtonPress();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button6_Click(object sender, EventArgs e)
        {

        }
    }
}
