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
        sa.Column('open_season', mysql.VARCHAR(length=64), nullable=False),
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
    op.bulk_insert(fish_table,[
    {'fish_type': 'mackerel',
    'toxicity': 'No',
     'classification': 'Pisces',
     'scientific_name': 'Scomber japonicus',
    'open_season': 'january~december', 'closed_season': 'jan~dec',
    'description': """It is one of the representative blue-backed fish in the family such as mackerel and tuna and tuna.
It is a migratory fish species that likes the warm sea with a body length of more than 40cm and a temperature of 10-22℃.
It is widely distributed worldwide, eating plankton when fried, and adult fish mainly feed on anchovies or small fish.""",
    'fish_url': 'https://www.google.com',
     'habitat': 'Pacific Ocean',
    'is_active': 1},
    {'fish_type': 'red stingray',
     'classification': 'Chondrichthyes',
        'scientific_name': 'Dasyatis akajei',
        'toxicity': 'Yes',
        'open_season': 'May', 'closed_season': 'August',
        'description': """ The yellow stingray is a species of fish in the family Colomidae.
There is a long poisonous thorn on the tail, which is about 15cm long, so not only is it very long, but it also has teeth on both sides. if it pokes a human body,
not only does it hurt terribly, but it also has poison at the end of the venomous thorn, which can lead to fainting and even death. """,
        'fish_url': 'https://www.google.com',
        'habitat': 'Pacific Ocean',
        'is_active': 1},
    {'fish_type': 'red snapper',
        'classification': 'Actinopterygii',
        'scientific_name': 'Lutjanus campechanus',
        'toxicity': 'Yes',
        'open_season': 'June', 'closed_season': 'October',
        'description': """Red tung sea bream is a coastal fish species that lives well in brackish waters where fresh water and seawater are mixed, especially in the mangrove area of the estuary of the river.
It is found mainly in the sea, but some species live in the mouth of the river or feed in fresh water.
Red tung sea bream caught in the tropics is said to require attention because cases of cigar terra poisoning have been found in the past.""",
        'fish_url': 'https://www.google.com',
        'habitat': 'Indian Ocean',
        'is_active': 1},
    {'fish_type': 'flat fish',
        'classification': 'Actinopterygii',
        'scientific_name': 'Paralichthys olivaceus',
        'toxicity': 'Yes',
        'open_season': 'January', 'closed_season': 'December',
        'description': """It is a species of sea fish belonging to the flounder family of flounder order It is a flat fish that is also well known as flatfish in Korea.
        Sand floors located between 10 and 200 meters deep are mainly preferred. It is not good at swimming long distances.
        Some flatfish live in parts of the Korean Peninsula's freshwater depending on the season.You should be careful not to get bitten when you catch a halibut caught by fishing because it has sharp teeth in your mouth.""",
        'fish_url': 'https://www.google.com',
        'habitat': 'The western part of Pacific Ocean',
        'is_active': 1},
    {'fish_type': 'dark-banded rockfish',
        'classification': 'Actinopterygii',
        'scientific_name': 'Sebastes inermis',
        'toxicity': 'No',
        'open_season': 'December', 'closed_season': 'February',
        'description': """It is distributed in all coasts of Korea, southern North Sea of Japan, and northern coast of China, especially in the Yellow Sea and Balhae Bay.
At the age of 4-6 months, 2-6 centimeters of fry appear in a seaweed-rich place and live under the sea from summer to autumn.
Small fish can be caught recklessly and your hands can be cut by pointed dorsal fins and gill caps.  """
        , 'fish_url': 'https://www.google.com',
        'habitat': 'a reef of Korean Peninsula',
        'is_active': 1},

    ]
    )


def downgrade() -> None:
    # drop table
    op.drop_table('fish')
