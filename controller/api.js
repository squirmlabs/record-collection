import express from 'express';
import {
  createRecord,
  findAllRecords,
  findBySlug,
  removeRecord,
  updateRecord
} from './records';

const router = express.Router();
// GET Methods
router.get('/', (req, res, next) => {
  res.send(`
<p>API Endpoints:</p>
<ul>
<li><a href="/api/records">/api/records</a></li>
<li><a href="/api/record/1">/api/record/:id</a></li>
</ul>
`);
});

router.get('/records', (req, res, next) => {
  findAllRecords(records => {
    res.json({
      response: records
    });
  });
});

router.get('/record/:slug', (req, res, next) => {
  const {
    params: { slug }
  } = req;

  findBySlug(slug, singleRecord => {
    console.log('single', singleRecord);
    if (!singleRecord || singleRecord.length === 0) {
      res.send({
        error: true,
        message: 'Record not found'
      });
    } else {
      res.json({
        response: [singleRecord]
      });
    }
  });
});

// POST Methods
router.post('/record', (req, res, next) => {
  const { artist, mix, song, year } = req.body;
  createRecord(artist, mix, song, year, (data, error = false) => {
    if (error) {
      res.json({
        error: true,
        details: error
      });
    } else {
      res.json({
        response: {
          saved: true,
          record: data
        }
      });
    }
  });
});

// DELETE Methods
router.delete('/record/:slug', (req, res, next) => {
  const {
    params: { slug }
  } = req;
  removeRecord(slug, (removed, error) => {
    if (error) {
      res.json({
        error: true,
        message: 'There was an error trying to remove this record...'
      });
    } else {
      res.json({
        response: {
          data: removed,
          removed: true
        }
      });
    }
  });
});

// PUT Methods
router.put('/record/:slug', (req, res, next) => {
  const {
    params: { slug },
    body: { artist, mix, song, year }
  } = req;
  
  updateRecord(slug, artist, mix, song, year, (affected, error) => {
    if (error) {
      res.json({
        error: true,
        message: 'There was an error trying to update the record'
      });
    } else {
      res.json({
        response: {
          updated: true,
          affected
        }
      });
    }
  });
});

export default router;
