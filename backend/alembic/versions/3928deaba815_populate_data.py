"""populate data

Revision ID: 3928deaba815
Revises: 
Create Date: 2023-01-20 11:36:44.234410

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '3928deaba815'
down_revision = None
branch_labels = None
depends_on = None

def upgrade() -> None:
    # create a fish table
    fish_table =op.create_table('fish',
        sa.Column('fish_id', mysql.INTEGER(), autoincrement=True, nullable=False),
        sa.Column('fish_type', mysql.VARCHAR(length=64), nullable=False),
        sa.Column('toxicity', mysql.VARCHAR(length=16), nullable=False),
        sa.Column('closed_season', mysql.VARCHAR(length=64), nullable=False),
        sa.Column('description', mysql.VARCHAR(length=512), nullable=False),
        sa.Column('classification', mysql.VARCHAR(length=64), nullable=False),
        sa.Column('scientific_name', mysql.VARCHAR(length=128), nullable=False),
        sa.Column('habitat', mysql.VARCHAR(length=64), nullable=False),
        sa.Column('fish_url', mysql.VARCHAR(length=100), nullable=True),
        sa.Column('created_at', mysql.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'),nullable=True),
        sa.Column('updated_at', mysql.TIMESTAMP(),
                  server_default=sa.text('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), nullable=True),
        sa.Column('is_active', mysql.TINYINT(display_width=1), autoincrement=False, nullable=False),
        sa.PrimaryKeyConstraint('fish_id'),
        mysql_collate='utf8mb4_0900_ai_ci',
        mysql_default_charset='utf8mb4',
        mysql_engine='InnoDB'
    )
    # populate some fish data

    op.execute('SET NAMES utf8')
    op.bulk_insert(fish_table,[

    {'fish_type': '고등어',
     'toxicity': 'X',
     'classification': '조기어류',
     'scientific_name': 'Scomber',
     'closed_season': '4월 ~ 6월',
     'description': """삼치, 참치 등과 같은 과에 속하는 대표적인 등푸른 생선 중 하나이다. 몸길이는 40cm가 넘으며, 10∼22℃인 따뜻한 바다를 좋아하는 회유성 어종이다. 몸길이는 40cm가 넘으며, 10∼22℃인 따뜻한 바다를 좋아하는 회유성 어종이다. 세계적으로 널리 분포하며 치어 때는 플랑크톤을 먹고, 성어는 멸치 또는 작은 물고기를 주 먹이로 삼는다.""",
     'fish_url': '',
     'habitat': '태평양,인도양',
     'is_active': 1},

    {'fish_type': '볼락',
    'classification': '조기어류',
    'scientific_name': 'Sebastes inermis',
    'toxicity': 'X',
    'closed_season': '12월 ~ 2월',
    'description': """우리나라의 전 연안, 일본의 북해도 이남 및 중국의 북부 연안에 분포하며, 특히 황해 및 발해만에 많이 서식한다. 4-6개월이 되면 2-6cm의 치어들이 해조가 많이 난 곳에 나타나서 여름부터 가을에 걸쳐 바다밑 생활을 한다. 작은 고기라고 함부로 잡았다가 뾰족한 등 지느러미와 아가미 뚜껑에 손이 베일 수 있다.""",
    'fish_url': '',
    'habitat': '한반도,일본,중국 연안 앝은곳 암초지대',
    'is_active': 1},

    {'fish_type': '노랑 가오리',
     'classification': '연골어류',
     'scientific_name': 'Dasyatis akajei',
     'toxicity': 'O',
     'closed_season': '5월 ~ 8월',
     'description': """ 노랑가오리는 색가오리과에 속하는 물고기로 꼬리에 긴 독가시가 하나 있는데 길이가 약 15cm 이기 때문에 매우 기다란 것 뿐만아니라 양쪽에 톱니가 있어 인간의 몸을 찌르면 몹시 아플 뿐만 아니라 독가시 끝에 맹독이 있어 기절하고 심지어 사망하는 수도 있다.""",
     'fish_url': '',
     'habitat': '서태평양 지역의 얕은 바다와 강 하구',
     'is_active': 1},

    {'fish_type': '적색퉁돔',
    'classification': '조기어류',
    'scientific_name': 'Lutjanus campechanus',
    'toxicity': 'O',
    'closed_season': '6월 ~ 10월',
    'description': """붉은퉁돔은 담수와 해수가 섞이는 기수역에서도 잘 생활하는 연안성의 어종으로, 특히 강 하구 맹그로브 지대에서 많이 발견된다. 주로 바다에서 발견되지만 일부 종은 강 어귀에서 서식하거나 민물에서 먹이를 구한다. 열대지방에서 잡힌 붉은퉁돔은 과거 시가테라 중독사례가 발견되기도 해서 주의를 요한다고도 한다.""",
    'fish_url': '',
    'habitat': '인도양, 서부태평양 열대 해역',
    'is_active': 1},

    {'fish_type': '넙치',
    'classification': '조기어류',
    'scientific_name': 'Paralichthys olivaceus',
    'toxicity': 'X',
    'closed_season': '3월 ~ 8월',
    'description': """가자미목 넙치과에 속하는 바다 어류의 일종. 한국에서 광어라는 이름으로도 잘 알려져 있는 납작한 물고기다. 수심 10~200m 사이에 위치한 모래 바닥을 주로 선호한다. 장거리를 이동하기에는 수영 실력이 뛰어나지 않으며 한반도 일부 지역에서는 계절에 따라 민물에 살기도 한다.입 안에 날카로운 이빨이 나있어서 낚시로 잡은 넙치를 손으로 잡을 때는 물리지 않도록 주의해야 한다.""",
    'fish_url': '',
    'habitat': '태평양 서부지역',
    'is_active': 1},
    ]
    )


def downgrade() -> None:
    # drop table
    op.drop_table('fish')
