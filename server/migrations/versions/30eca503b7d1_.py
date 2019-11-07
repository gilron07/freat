"""empty message

Revision ID: 30eca503b7d1
Revises: 
Create Date: 2019-11-06 10:19:15.443055

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '30eca503b7d1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('postings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=128), nullable=False),
    sa.Column('desc', sa.String(length=250), nullable=True),
    sa.Column('location', sa.String(length=128), nullable=False),
    sa.Column('time', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('postings')
    # ### end Alembic commands ###
